/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Passport, PassportInterface } from "../Passport";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "document_number",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "country_name",
        type: "string",
      },
    ],
    name: "CountryAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "document_number",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "PersonAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "country_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "visit_date",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isVisit",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_document_number",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "_birthdate",
        type: "string",
      },
    ],
    name: "addCountryToPerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_document_number",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "_birthdate",
        type: "string",
      },
    ],
    name: "addPerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPeople",
    outputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "documents",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "surnames",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "countries",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "birthdates",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_document_number",
        type: "string",
      },
    ],
    name: "getPerson",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "country",
        type: "string",
      },
      {
        internalType: "string",
        name: "birthdate",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isVisit",
            type: "bool",
          },
        ],
        internalType: "struct Passport.Country[]",
        name: "countries",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPersonCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_document_number",
        type: "string",
      },
    ],
    name: "isPersonExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeAllPeople",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506122ec8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385a26d7d1161005b57806385a26d7d146100c6578063acd2c2d6146100e8578063c4d9e7fa14610104578063e907247c146101345761007d565b80631ed52ed81461008257806320fda744146100a05780633da20e26146100bc575b600080fd5b61008a610168565b60405161009791906114a6565b60405180910390f35b6100ba60048036038101906100b59190611653565b610174565b005b6100c46104af565b005b6100ce610636565b6040516100df95949392919061190e565b60405180910390f35b61010260048036038101906100fd9190611984565b610bf4565b005b61011e60048036038101906101199190611a8b565b610ddc565b60405161012b9190611ae3565b60405180910390f35b61014e60048036038101906101499190611a8b565b610e15565b60405161015f959493929190611c70565b60405180910390f35b60008080549050905090565b61017d85610ddc565b6102e15760006002866040516101939190611d22565b90815260200160405180910390209050848160000190816101b49190611f45565b50838160020190816101c69190611f45565b50858160010190816101d89190611f45565b50828160030190816101ea9190611f45565b50818160040190816101fc9190611f45565b5060008190806001815401808255809150506001900390600052602060002090600602016000909190919091506000820181600001908161023d919061202d565b5060018201816001019081610252919061202d565b5060028201816002019081610267919061202d565b506003820181600301908161027c919061202d565b5060048201816004019081610291919061202d565b5060058201816005019080546102a8929190611277565b50505060016000805490506102bd9190612144565b6001876040516102cd9190611d22565b908152602001604051809103902081905550505b60006002866040516102f39190611d22565b90815260200160405180910390209050600060405180606001604052808b81526020018a815260200189151581525090508160050181908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190816103679190611f45565b50602082015181600101908161037d9190611f45565b5060408201518160020160006101000a81548160ff021916908315150217905550505060006001886040516103b29190611d22565b908152602001604051809103902054905082600082815481106103d8576103d7612178565b5b9060005260206000209060060201600082018160000190816103fa919061202d565b506001820181600101908161040f919061202d565b5060028201816002019081610424919061202d565b5060038201816003019081610439919061202d565b506004820181600401908161044e919061202d565b506005820181600501908054610465929190611277565b509050507f7cb7960279a36e314ac958394e3b18a24a49a0ffa78a423c7848437af933c4b1888c60405161049a9291906121a7565b60405180910390a15050505050505050505050565b60008080549050905060005b818110156106255760008082815481106104d8576104d7612178565b5b906000526020600020906006020160010180546104f490611d68565b80601f016020809104026020016040519081016040528092919081815260200182805461052090611d68565b801561056d5780601f106105425761010080835404028352916020019161056d565b820191906000526020600020905b81548152906001019060200180831161055057829003601f168201915b505050505090506002816040516105849190611d22565b9081526020016040518091039020600080820160006105a39190611326565b6001820160006105b39190611326565b6002820160006105c39190611326565b6003820160006105d39190611326565b6004820160006105e39190611326565b6005820160006105f39190611366565b50506001816040516106059190611d22565b9081526020016040518091039020600090555080806001019150506104bb565b50600080610633919061138a565b50565b60608060608060606000808054905090508067ffffffffffffffff811115610661576106606114f0565b5b60405190808252806020026020018201604052801561069457816020015b606081526020019060019003908161067f5790505b5095508067ffffffffffffffff8111156106b1576106b06114f0565b5b6040519080825280602002602001820160405280156106e457816020015b60608152602001906001900390816106cf5790505b5094508067ffffffffffffffff811115610701576107006114f0565b5b60405190808252806020026020018201604052801561073457816020015b606081526020019060019003908161071f5790505b5093508067ffffffffffffffff811115610751576107506114f0565b5b60405190808252806020026020018201604052801561078457816020015b606081526020019060019003908161076f5790505b5092508067ffffffffffffffff8111156107a1576107a06114f0565b5b6040519080825280602002602001820160405280156107d457816020015b60608152602001906001900390816107bf5790505b50915060005b81811015610beb57600081815481106107f6576107f5612178565b5b9060005260206000209060060201600001805461081290611d68565b80601f016020809104026020016040519081016040528092919081815260200182805461083e90611d68565b801561088b5780601f106108605761010080835404028352916020019161088b565b820191906000526020600020905b81548152906001019060200180831161086e57829003601f168201915b50505050508782815181106108a3576108a2612178565b5b6020026020010181905250600081815481106108c2576108c1612178565b5b906000526020600020906006020160010180546108de90611d68565b80601f016020809104026020016040519081016040528092919081815260200182805461090a90611d68565b80156109575780601f1061092c57610100808354040283529160200191610957565b820191906000526020600020905b81548152906001019060200180831161093a57829003601f168201915b505050505086828151811061096f5761096e612178565b5b60200260200101819052506000818154811061098e5761098d612178565b5b906000526020600020906006020160020180546109aa90611d68565b80601f01602080910402602001604051908101604052809291908181526020018280546109d690611d68565b8015610a235780601f106109f857610100808354040283529160200191610a23565b820191906000526020600020905b815481529060010190602001808311610a0657829003601f168201915b5050505050858281518110610a3b57610a3a612178565b5b602002602001018190525060008181548110610a5a57610a59612178565b5b90600052602060002090600602016003018054610a7690611d68565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa290611d68565b8015610aef5780601f10610ac457610100808354040283529160200191610aef565b820191906000526020600020905b815481529060010190602001808311610ad257829003601f168201915b5050505050848281518110610b0757610b06612178565b5b602002602001018190525060008181548110610b2657610b25612178565b5b90600052602060002090600602016004018054610b4290611d68565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6e90611d68565b8015610bbb5780601f10610b9057610100808354040283529160200191610bbb565b820191906000526020600020905b815481529060010190602001808311610b9e57829003601f168201915b5050505050838281518110610bd357610bd2612178565b5b602002602001018190525080806001019150506107da565b50509091929394565b610bfd85610ddc565b15610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c349061222a565b60405180910390fd5b6000600286604051610c4f9190611d22565b9081526020016040518091039020905084816000019081610c709190611f45565b5083816002019081610c829190611f45565b5085816001019081610c949190611f45565b5082816003019081610ca69190611f45565b5081816004019081610cb89190611f45565b50600081908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201816000019081610cf9919061202d565b5060018201816001019081610d0e919061202d565b5060028201816002019081610d23919061202d565b5060038201816003019081610d38919061202d565b5060048201816004019081610d4d919061202d565b506005820181600501908054610d64929190611277565b5050506001600080549050610d799190612144565b600187604051610d899190611d22565b9081526020016040518091039020819055507f1543e79d713d74e26d072b2df09905c3845238012dfdca30b85d66fe3dba03978686604051610dcc9291906121a7565b60405180910390a1505050505050565b600080600283604051610def9190611d22565b90815260200160405180910390206000018054610e0b90611d68565b9050119050919050565b6060806060806060610e2686610ddc565b610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c90612296565b60405180910390fd5b6000600287604051610e779190611d22565b908152602001604051809103902090508060000181600201826003018360040184600501848054610ea790611d68565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed390611d68565b8015610f205780601f10610ef557610100808354040283529160200191610f20565b820191906000526020600020905b815481529060010190602001808311610f0357829003601f168201915b50505050509450838054610f3390611d68565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5f90611d68565b8015610fac5780601f10610f8157610100808354040283529160200191610fac565b820191906000526020600020905b815481529060010190602001808311610f8f57829003601f168201915b50505050509350828054610fbf90611d68565b80601f0160208091040260200160405190810160405280929190818152602001828054610feb90611d68565b80156110385780601f1061100d57610100808354040283529160200191611038565b820191906000526020600020905b81548152906001019060200180831161101b57829003601f168201915b5050505050925081805461104b90611d68565b80601f016020809104026020016040519081016040528092919081815260200182805461107790611d68565b80156110c45780601f10611099576101008083540402835291602001916110c4565b820191906000526020600020905b8154815290600101906020018083116110a757829003601f168201915b5050505050915080805480602002602001604051908101604052809291908181526020016000905b8282101561125d578382906000526020600020906003020160405180606001604052908160008201805461111f90611d68565b80601f016020809104026020016040519081016040528092919081815260200182805461114b90611d68565b80156111985780601f1061116d57610100808354040283529160200191611198565b820191906000526020600020905b81548152906001019060200180831161117b57829003601f168201915b505050505081526020016001820180546111b190611d68565b80601f01602080910402602001604051908101604052809291908181526020018280546111dd90611d68565b801561122a5780601f106111ff5761010080835404028352916020019161122a565b820191906000526020600020905b81548152906001019060200180831161120d57829003601f168201915b505050505081526020016002820160009054906101000a900460ff161515151581525050815260200190600101906110ec565b505050509050955095509550955095505091939590929450565b8280548282559060005260206000209060030281019282156113155760005260206000209160030282015b82811115611314578282600082018160000190816112c0919061202d565b50600182018160010190816112d5919061202d565b506002820160009054906101000a900460ff168160020160006101000a81548160ff0219169083151502179055505050916003019190600301906112a2565b5b50905061132291906113ae565b5090565b50805461133290611d68565b6000825580601f106113445750611363565b601f01602090049060005260206000209081019061136291906113f9565b5b50565b508054600082556003029060005260206000209081019061138791906113ae565b50565b50805460008255600602906000526020600020908101906113ab9190611416565b50565b5b808211156113f557600080820160006113c89190611326565b6001820160006113d89190611326565b6002820160006101000a81549060ff0219169055506003016113af565b5090565b5b808211156114125760008160009055506001016113fa565b5090565b5b8082111561148957600080820160006114309190611326565b6001820160006114409190611326565b6002820160006114509190611326565b6003820160006114609190611326565b6004820160006114709190611326565b6005820160006114809190611366565b50600601611417565b5090565b6000819050919050565b6114a08161148d565b82525050565b60006020820190506114bb6000830184611497565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611528826114df565b810181811067ffffffffffffffff82111715611547576115466114f0565b5b80604052505050565b600061155a6114c1565b9050611566828261151f565b919050565b600067ffffffffffffffff821115611586576115856114f0565b5b61158f826114df565b9050602081019050919050565b82818337600083830152505050565b60006115be6115b98461156b565b611550565b9050828152602081018484840111156115da576115d96114da565b5b6115e584828561159c565b509392505050565b600082601f830112611602576116016114d5565b5b81356116128482602086016115ab565b91505092915050565b60008115159050919050565b6116308161161b565b811461163b57600080fd5b50565b60008135905061164d81611627565b92915050565b600080600080600080600080610100898b031215611674576116736114cb565b5b600089013567ffffffffffffffff811115611692576116916114d0565b5b61169e8b828c016115ed565b985050602089013567ffffffffffffffff8111156116bf576116be6114d0565b5b6116cb8b828c016115ed565b97505060406116dc8b828c0161163e565b965050606089013567ffffffffffffffff8111156116fd576116fc6114d0565b5b6117098b828c016115ed565b955050608089013567ffffffffffffffff81111561172a576117296114d0565b5b6117368b828c016115ed565b94505060a089013567ffffffffffffffff811115611757576117566114d0565b5b6117638b828c016115ed565b93505060c089013567ffffffffffffffff811115611784576117836114d0565b5b6117908b828c016115ed565b92505060e089013567ffffffffffffffff8111156117b1576117b06114d0565b5b6117bd8b828c016115ed565b9150509295985092959890939650565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611833578082015181840152602081019050611818565b60008484015250505050565b600061184a826117f9565b6118548185611804565b9350611864818560208601611815565b61186d816114df565b840191505092915050565b6000611884838361183f565b905092915050565b6000602082019050919050565b60006118a4826117cd565b6118ae81856117d8565b9350836020820285016118c0856117e9565b8060005b858110156118fc57848403895281516118dd8582611878565b94506118e88361188c565b925060208a019950506001810190506118c4565b50829750879550505050505092915050565b600060a08201905081810360008301526119288188611899565b9050818103602083015261193c8187611899565b905081810360408301526119508186611899565b905081810360608301526119648185611899565b905081810360808301526119788184611899565b90509695505050505050565b600080600080600060a086880312156119a05761199f6114cb565b5b600086013567ffffffffffffffff8111156119be576119bd6114d0565b5b6119ca888289016115ed565b955050602086013567ffffffffffffffff8111156119eb576119ea6114d0565b5b6119f7888289016115ed565b945050604086013567ffffffffffffffff811115611a1857611a176114d0565b5b611a24888289016115ed565b935050606086013567ffffffffffffffff811115611a4557611a446114d0565b5b611a51888289016115ed565b925050608086013567ffffffffffffffff811115611a7257611a716114d0565b5b611a7e888289016115ed565b9150509295509295909350565b600060208284031215611aa157611aa06114cb565b5b600082013567ffffffffffffffff811115611abf57611abe6114d0565b5b611acb848285016115ed565b91505092915050565b611add8161161b565b82525050565b6000602082019050611af86000830184611ad4565b92915050565b600082825260208201905092915050565b6000611b1a826117f9565b611b248185611afe565b9350611b34818560208601611815565b611b3d816114df565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611b7d8161161b565b82525050565b60006060830160008301518482036000860152611ba0828261183f565b91505060208301518482036020860152611bba828261183f565b9150506040830151611bcf6040860182611b74565b508091505092915050565b6000611be68383611b83565b905092915050565b6000602082019050919050565b6000611c0682611b48565b611c108185611b53565b935083602082028501611c2285611b64565b8060005b85811015611c5e5784840389528151611c3f8582611bda565b9450611c4a83611bee565b925060208a01995050600181019050611c26565b50829750879550505050505092915050565b600060a0820190508181036000830152611c8a8188611b0f565b90508181036020830152611c9e8187611b0f565b90508181036040830152611cb28186611b0f565b90508181036060830152611cc68185611b0f565b90508181036080830152611cda8184611bfb565b90509695505050505050565b600081905092915050565b6000611cfc826117f9565b611d068185611ce6565b9350611d16818560208601611815565b80840191505092915050565b6000611d2e8284611cf1565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d8057607f821691505b602082108103611d9357611d92611d39565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611dfb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611dbe565b611e058683611dbe565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611e42611e3d611e388461148d565b611e1d565b61148d565b9050919050565b6000819050919050565b611e5c83611e27565b611e70611e6882611e49565b848454611dcb565b825550505050565b600090565b611e85611e78565b611e90818484611e53565b505050565b5b81811015611eb457611ea9600082611e7d565b600181019050611e96565b5050565b601f821115611ef957611eca81611d99565b611ed384611dae565b81016020851015611ee2578190505b611ef6611eee85611dae565b830182611e95565b50505b505050565b600082821c905092915050565b6000611f1c60001984600802611efe565b1980831691505092915050565b6000611f358383611f0b565b9150826002028217905092915050565b611f4e826117f9565b67ffffffffffffffff811115611f6757611f666114f0565b5b611f718254611d68565b611f7c828285611eb8565b600060209050601f831160018114611faf5760008415611f9d578287015190505b611fa78582611f29565b86555061200f565b601f198416611fbd86611d99565b60005b82811015611fe557848901518255600182019150602085019450602081019050611fc0565b868310156120025784890151611ffe601f891682611f0b565b8355505b6001600288020188555050505b505050505050565b60008154905061202681611d68565b9050919050565b81810361203b575050612113565b61204482612017565b67ffffffffffffffff81111561205d5761205c6114f0565b5b6120678254611d68565b612072828285611eb8565b6000601f8311600181146120a1576000841561208f578287015490505b6120998582611f29565b86555061210c565b601f1984166120af87611d99565b96506120ba86611d99565b60005b828110156120e2578489015482556001820191506001850194506020810190506120bd565b868310156120ff57848901546120fb601f891682611f0b565b8355505b6001600288020188555050505b5050505050505b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061214f8261148d565b915061215a8361148d565b925082820390508181111561217257612171612115565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060408201905081810360008301526121c18185611b0f565b905081810360208301526121d58184611b0f565b90509392505050565b7f506572736f6e20616c7265616479206578697374730000000000000000000000600082015250565b6000612214601583611afe565b915061221f826121de565b602082019050919050565b6000602082019050818103600083015261224381612207565b9050919050565b7f506572736f6e20646f6573206e6f742065786973740000000000000000000000600082015250565b6000612280601583611afe565b915061228b8261224a565b602082019050919050565b600060208201905081810360008301526122af81612273565b905091905056fea2646970667358221220a887c88b51b9c202516922747c09b612c8486d2df3c696b648e4be92b8cfd1ff64736f6c634300081b0033";

type PassportConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PassportConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Passport__factory extends ContractFactory {
  constructor(...args: PassportConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Passport & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Passport__factory {
    return super.connect(runner) as Passport__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PassportInterface {
    return new Interface(_abi) as PassportInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Passport {
    return new Contract(address, _abi, runner) as unknown as Passport;
  }
}
