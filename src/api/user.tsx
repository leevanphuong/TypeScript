import instance from "./instance";
const getUser =()=>{
    return instance.get('/users')
}
const addUser =(user:any)=>{
    return instance.post('/users',user)
}
export {getUser,addUser}