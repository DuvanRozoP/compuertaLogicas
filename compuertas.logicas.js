export const AND = function (inte1,inte2) {
    if(inte1 && inte2) return 1;
    else return 0;
}

export function OR(inte1,inte2) {
    if(inte1 || inte2) return 1;
    else return 0;
}

export function XOR(inte1,inte2) {
    if(inte1 === 0 && inte2 === 0) return 0;
    if(inte1 === 0 && inte2 === 1) return 1;
    if(inte1 === 1 && inte2 === 0) return 1;
    if(inte1 === 1 && inte2 === 1) return 0;
}

export function NOT(inte1) {
    if(inte1 === 0) return 1;
    if(inte1 === 1) return 0;
}

export function NAND(inte1,inte2) {
    if(inte1 === 0 && inte2 === 0) return 1;
    if(inte1 === 0 && inte2 === 1) return 1;
    if(inte1 === 1 && inte2 === 0) return 1;
    if(inte1 === 1 && inte2 === 1) return 0;
}

export function NOR(inte1,inte2) {
    if(inte1 === 0 && inte2 === 0) return 1;
    if(inte1 === 0 && inte2 === 1) return 0;
    if(inte1 === 1 && inte2 === 0) return 0;
    if(inte1 === 1 && inte2 === 1) return 0;
}