const LendBorrowContactAddress = {
    avalanche: "0x12C0A51D44eF8798A9EbFBF0c49FE48202CB3B36",
    polygon: "0xE9481B0Ac6ee67062834505e98B2529a839978b9"
}

const LendBorrowContractABIs = {
    polygon: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AddressIsNotBridge_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AddressIsNotOwner_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AdminCouldNotWithdrawMoney",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_BridgeAlreadyExists_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_ContractIsNotAllowedToPullToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_NFTDoesNotLendOnThisChain",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_TokenDoesNotHaveWorthInContrat",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveAnyLoanPending",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveBorrowingPower",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveSufficientTokensToBurn",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Received",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DAO_CONTRACT_ADDRESS",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrowerAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "DUSD_AMOUNT",
                    "type": "uint256"
                }
            ],
            "name": "addBorrowingPowerByBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressToAssociatedLoan",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "borrowingPowerInUSD",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "bridge",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32OfTokenToAssociatedLoan",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32OfTokenToFloorPriceOfTokenAtTimeOfDepositing",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "chainAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "chainIds",
            "outputs": [
                {
                    "internalType": "uint32",
                    "name": "",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "contractAddressToTokenIdToDUSDBorrowableAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                }
            ],
            "name": "depositNFT",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "DUSD_NFT_WORTH",
                    "type": "uint256"
                }
            ],
            "name": "floorPriceOfNFT",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_borrower",
                    "type": "address"
                }
            ],
            "name": "giveERC20TokensBalanceOfBorrower",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "i_owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "ownerOfOrignalTokens",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pullMoney",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrowerAddress",
                    "type": "address"
                }
            ],
            "name": "removeBorrowingPowerByBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_borrower",
                    "type": "address"
                }
            ],
            "name": "repayLoan",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_bridge",
                    "type": "address"
                }
            ],
            "name": "setBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_bridgeOfPolygon",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_bridgeOfAvalanche",
                    "type": "address"
                }
            ],
            "name": "setBridgeContractsForChains",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "token_id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                }
            ],
            "name": "tryToLiquidateNFT",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withDrawTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    avalanche: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AddressIsNotBridge_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AddressIsNotOwner_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_AdminCouldNotWithdrawMoney",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_BridgeAlreadyExists_Error",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_ContractIsNotAllowedToPullToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_NFTDoesNotLendOnThisChain",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_TokenDoesNotHaveWorthInContrat",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveAnyLoanPending",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveBorrowingPower",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LendBorrow_UserDoesNotHaveSufficientTokensToBurn",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Received",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DAO_CONTRACT_ADDRESS",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrowerAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "DUSD_AMOUNT",
                    "type": "uint256"
                }
            ],
            "name": "addBorrowingPowerByBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressToAssociatedLoan",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "borrowingPowerInUSD",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "bridge",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32OfTokenToAssociatedLoan",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32OfTokenToFloorPriceOfTokenAtTimeOfDepositing",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "chainAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "chainIds",
            "outputs": [
                {
                    "internalType": "uint32",
                    "name": "",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "contractAddressToTokenIdToDUSDBorrowableAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                }
            ],
            "name": "depositNFT",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "DUSD_NFT_WORTH",
                    "type": "uint256"
                }
            ],
            "name": "floorPriceOfNFT",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_borrower",
                    "type": "address"
                }
            ],
            "name": "giveERC20TokensBalanceOfBorrower",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "i_owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "ownerOfOrignalTokens",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pullMoney",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrowerAddress",
                    "type": "address"
                }
            ],
            "name": "removeBorrowingPowerByBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_borrower",
                    "type": "address"
                }
            ],
            "name": "repayLoan",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_bridge",
                    "type": "address"
                }
            ],
            "name": "setBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_bridgeOfPolygon",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_bridgeOfAvalanche",
                    "type": "address"
                }
            ],
            "name": "setBridgeContractsForChains",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "token_id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "tokenContractAddress",
                    "type": "address"
                }
            ],
            "name": "tryToLiquidateNFT",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withDrawTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]
}

module.exports = { LendBorrowContactAddress, LendBorrowContractABIs };

