// server.ts
import express, { Request, Response } from "express";
import { ethers } from "ethers";
import cors from "cors";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import getContract from "./utils/getContract";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Contract ABI - Update this with your contract's ABI

const contract = getContract();
// Interfaces
interface User {
  name: string;
  surname: string;
  email: string;
  document_number: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
  timestamp: number;
}

// Validation middleware
const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("surname").notEmpty().withMessage("Surname is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("document_number").notEmpty().withMessage("Document number is required"),
];

const validateCoordinate = [
  body("document_number").notEmpty().withMessage("Document number is required"),
  body("latitude")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Invalid latitude"),
  body("longitude")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Invalid longitude"),
];

// Error handler middleware
const errorHandler = (err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};

// Routes
app.post("/api/users", validateUser, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, document_number }: User = req.body;

    const exists = await contract.checkUserExists(document_number);
    if (exists) {
      return res.status(400).json({
        success: false,
        error: "User already exists",
      });
    }

    const tx = await contract.addUser(name, surname, email, document_number);
    await tx.wait();

    res.json({
      success: true,
      data: { name, surname, email, document_number },
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

app.put(
  "/api/users/:document_number",
  validateUser,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { document_number } = req.params;
      const { name, surname, email }: User = req.body;

      const exists = await contract.checkUserExists(document_number);
      if (!exists) {
        return res.status(404).json({
          success: false,
          error: "User not found",
        });
      }

      const tx = await contract.updateUser(
        name,
        surname,
        email,
        document_number
      );
      await tx.wait();

      res.json({
        success: true,
        data: { name, surname, email, document_number },
      });
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
);

app.post(
  "/api/coordinates",
  validateCoordinate,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { document_number, latitude, longitude } = req.body;

      const exists = await contract.checkUserExists(document_number);
      if (!exists) {
        return res.status(404).json({
          success: false,
          error: "User not found",
        });
      }

      const tx = await contract.addCoordinate(
        document_number,
        latitude,
        longitude
      );
      await tx.wait();

      res.json({
        success: true,
        data: { document_number, latitude, longitude },
      });
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
);

app.get("/api/users/:document_number", async (req: Request, res: Response) => {
  try {
    const { document_number } = req.params;

    const exists = await contract.checkUserExists(document_number);
    if (!exists) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    const [name, surname, email, docNum, coordinateCount] =
      await contract.getUser(document_number);
    const [latitudes, longitudes, timestamps] =
      await contract.getUserCoordinates(document_number);

    const coordinates: Coordinate[] = latitudes.map(
      (lat: number, index: number) => ({
        latitude: Number(lat),
        longitude: Number(longitudes[index]),
        timestamp: Number(timestamps[index]),
      })
    );

    res.json({
      success: true,
      data: {
        name,
        surname,
        email,
        document_number: docNum,
        coordinates,
        coordinateCount: Number(coordinateCount),
      },
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const [names, surnames, emails, document_numbers] =
      await contract.getAllUsers();

    const users = names.map((name: string, index: number) => ({
      name,
      surname: surnames[index],
      email: emails[index],
      document_number: document_numbers[index],
    }));

    res.json({
      success: true,
      data: users,
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
