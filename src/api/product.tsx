import { Iproduct } from "../interface/product";
import instance from "./instance";

const getAll =()=>{
    return instance.get('/products')
}
const getOne =(id:number)=>{
    return instance.get('/products/'+id)
}
const removeProduct =async (id:number)=>{
    const user = JSON.parse(localStorage.getItem('user')!)
    if(user.role==1){
        return  await instance.delete('/products/'+id)
    }
}
const updatePro = async (product: Iproduct)=>{
    const user = JSON.parse(localStorage.getItem('user')!)
    if(user.role==1){
    return await instance.put('/products/'+product.id, product)
    }
}
const addPro = async (product: Iproduct)=>{
    const user = JSON.parse(localStorage.getItem('user')!)
    if(user.role==1){
    return await instance.post('/products', product)
    }
}

export {getAll,getOne,removeProduct,updatePro,addPro}