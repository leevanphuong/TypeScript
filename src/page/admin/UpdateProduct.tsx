import React, { useEffect } from 'react'
import { Iproduct } from '../../interface/product'
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {message} from "antd"


interface Iprops{
    product: Iproduct[],
    onUpdate: Function
}
const UpdateProduct = (props: Iprops) => {
    const naviga = useNavigate()
    const {id} = useParams()
    const {register, handleSubmit, reset}= useForm()
    useEffect(()=>{
        const newPro = props.product.find((item:any)=> item.id == id)
        reset(newPro)
    },[props])
    const onhandleSubmit=(data:any)=>{
        props.onUpdate(data)
        if(data){
            message.success("cap nhap thanh cong")
            naviga('/admin')
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onhandleSubmit)}>
            <input type="text" {...register("name")} />
            <br />
            <input type="number" {...register("price")} />
            <br />
            <button type='submit'>Cap nhap</button>
        </form>
    </div>
  )
}

export default UpdateProduct