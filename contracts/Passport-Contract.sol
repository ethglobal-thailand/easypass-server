// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserManagement {
    struct Coordinate {
        int256 latitude;
        int256 longitude;
        uint256 timestamp;
    }

    struct User {
        string name;
        string surname;
        string email;
        string document_number;
        Coordinate[] coordinates;
        bool exists;
    }

    mapping(string => User) private users; // document_number => User
    string[] private documentNumbers; // Array to keep track of all document numbers

    event UserAdded(string indexed document_number, string name, string email);
    event UserUpdated(
        string indexed document_number,
        string name,
        string email
    );
    event CoordinateAdded(
        string indexed document_number,
        int256 latitude,
        int256 longitude
    );

    modifier userExists(string memory _document_number) {
        require(users[_document_number].exists, "User does not exist");
        _;
    }

    modifier userDoesNotExist(string memory _document_number) {
        require(!users[_document_number].exists, "User already exists");
        _;
    }

    modifier validDocumentNumber(string memory _document_number) {
        require(
            bytes(_document_number).length > 0,
            "Document number cannot be empty"
        );
        _;
    }

    modifier validEmail(string memory _email) {
        require(bytes(_email).length > 0, "Email cannot be empty");
        _;
    }

    function addUser(
        string memory _name,
        string memory _surname,
        string memory _email,
        string memory _document_number
    )
        public
        userDoesNotExist(_document_number)
        validEmail(_email)
        validDocumentNumber(_document_number)
    {
        User storage newUser = users[_document_number];
        newUser.name = _name;
        newUser.surname = _surname;
        newUser.email = _email;
        newUser.document_number = _document_number;
        newUser.exists = true;
        documentNumbers.push(_document_number);

        emit UserAdded(_document_number, _name, _email);
    }

    function updateUser(
        string memory _name,
        string memory _surname,
        string memory _email,
        string memory _document_number
    ) public userExists(_document_number) validEmail(_email) {
        User storage user = users[_document_number];
        user.name = _name;
        user.surname = _surname;
        user.email = _email;

        emit UserUpdated(_document_number, _name, _email);
    }

    function addCoordinate(
        string memory _document_number,
        int256 _latitude,
        int256 _longitude
    ) public userExists(_document_number) {
        require(_latitude >= -90 && _latitude <= 90, "Invalid latitude");
        require(_longitude >= -180 && _longitude <= 180, "Invalid longitude");

        User storage user = users[_document_number];
        user.coordinates.push(
            Coordinate({
                latitude: _latitude,
                longitude: _longitude,
                timestamp: block.timestamp
            })
        );

        emit CoordinateAdded(_document_number, _latitude, _longitude);
    }

    function getUser(
        string memory _document_number
    )
        public
        view
        userExists(_document_number)
        returns (
            string memory name,
            string memory surname,
            string memory email,
            string memory document_number,
            uint256 coordinateCount
        )
    {
        User storage user = users[_document_number];
        return (
            user.name,
            user.surname,
            user.email,
            user.document_number,
            user.coordinates.length
        );
    }

    function getUserCoordinates(
        string memory _document_number
    )
        public
        view
        userExists(_document_number)
        returns (
            int256[] memory latitudes,
            int256[] memory longitudes,
            uint256[] memory timestamps
        )
    {
        User storage user = users[_document_number];
        uint256 length = user.coordinates.length;

        latitudes = new int256[](length);
        longitudes = new int256[](length);
        timestamps = new uint256[](length);

        for (uint256 i = 0; i < length; i++) {
            latitudes[i] = user.coordinates[i].latitude;
            longitudes[i] = user.coordinates[i].longitude;
            timestamps[i] = user.coordinates[i].timestamp;
        }

        return (latitudes, longitudes, timestamps);
    }

    function getAllUsers()
        public
        view
        returns (
            string[] memory names,
            string[] memory surnames,
            string[] memory emails,
            string[] memory document_numbers
        )
    {
        uint256 length = documentNumbers.length;

        names = new string[](length);
        surnames = new string[](length);
        emails = new string[](length);
        document_numbers = new string[](length);

        for (uint256 i = 0; i < length; i++) {
            string memory docNum = documentNumbers[i];
            User storage user = users[docNum];

            names[i] = user.name;
            surnames[i] = user.surname;
            emails[i] = user.email;
            document_numbers[i] = user.document_number;
        }

        return (names, surnames, emails, document_numbers);
    }

    function getUserCount() public view returns (uint256) {
        return documentNumbers.length;
    }

    function deleteCoordinates(
        string memory _document_number
    ) public userExists(_document_number) {
        delete users[_document_number].coordinates;
    }

    function checkUserExists(
        string memory _document_number
    ) public view returns (bool) {
        return false;
    }
}
