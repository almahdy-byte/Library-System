export const allowTo = (roles = [] , role)=>{
if(!roles.includes(role)) 
    throw new Error('you are not allowed to access this page')
return
}