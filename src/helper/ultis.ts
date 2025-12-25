const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

export const hashPasswordHelper = async (plainpassword: string) =>{
    try{
        
        return await bcrypt.hash(plainpassword, SALT_ROUNDS);
    }catch (error){
        console.log(error)
    }
}

export const comparePasswordHelper = async (plainpassword: string, hashpassword: string) =>{
    try{
        return await bcrypt.compare(plainpassword, hashpassword);
    }catch (error){
        console.log(error)
    }
}