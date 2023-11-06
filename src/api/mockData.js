export const users = [{
    userId: 1,
    phoneNumber: "0355782573",
    pin: 999999,
    name: "Minh Tân",
    balance: 5000000000,
}, {
    userId: 2,
    phoneNumber: "0355782574",
    pin: 999999,
    name: "Minh Tân 2",
    balance: 5000000001,
}]

export const fiends = [{
    user1Id: 1,
    user2Id: 2,
}]

export const transactions = [{
    transactionId: 1,
    type: "Transfer",
    amount: 2000000,
    senderId: 1,
    receiverId: 2,
    timeStamp: "",
    description: "Transfer"
}, {
    transactionId: 2,
    type: "Deposit",
    amount: 200000,
    senderId: null,
    receiverId: 1,
    timeStamp: "",
    description: "Deposit"
}, {
    transactionId: 3,
    type: "Withdraw",
    amount: 200000,
    senderId: 1,
    receiverId: null,
    timeStamp: "",
    description: "Withdraw"
}]