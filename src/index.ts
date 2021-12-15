import {TypedDataUtils, TypedMessage} from "eth-sig-util";
import {EIP712TypedData, MessageTypes} from "./models";

const WORLD = 'world';

export function hello(world: string = WORLD): string {
    return `Hello ${world}! `;
}

export type LimitOrderHash = string;

const data:EIP712TypedData = {
    message: {
        operation:"0",
        nonce:"0",
        token:{
        name:"Ethereum",
            decimals:18,
            symbol:"ETH",
            logoUri:"https://gnosis-safe.io/app/static/media/token_eth.bc98bd46.svg",
            address:"main"
        },
        recipient:"0x60AF6197d08dEa71A22581f13B72018B8C2671A7",
        type:"transferFunds",
        data:"0x",
        to:"0x60AF6197d08dEa71A22581f13B72018B8C2671A7",
        amount:"10000000000000000",
        value:"10000000000000000"
    },
    primaryType: 'EIP712Domain',
    domain: { // I don't think this part is correct based on the docs: https://github.com/gnosis/zodiac-module-reality#domain
        chainId: 1,
        verifyingContract: '0x1234'
    },
    types: {
        Transaction: [
            { type: "address", name: "to" },
            { type: "uint256", name: "value" },
            { type: "bytes", name: "data" },
            { type: "uint8", name: "operation" },
            { type: "uint256", name: "nonce" }
        ]
    },
}

function buildLimitOrderHash(orderTypedData: EIP712TypedData): LimitOrderHash {
    const message = orderTypedData as TypedMessage<MessageTypes>;

    return '0x' + TypedDataUtils.sign(message).toString('hex');
}

console.log("Limit order: ")
console.log(data);

const limitOrderHash = buildLimitOrderHash(data)

console.log("Limit order hash: ")
console.log(limitOrderHash);