export const throwUnluckNumber = value => {
    if(4 == value){
        throw Error("unlucky number 4!");
    }
    return value;
};