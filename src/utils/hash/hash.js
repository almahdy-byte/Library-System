import bcrypt from 'bcrypt'


export const hash = async(text)=>{
 return await bcrypt.hashSync(text , Number(process.env.HASH_ROUNDS));
}