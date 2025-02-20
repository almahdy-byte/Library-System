import bcrypt from 'bcrypt'

export const compare = async(text , hashedText)=> await bcrypt.compareSync(text , hashedText)