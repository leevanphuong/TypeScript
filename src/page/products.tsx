import React, { useEffect, useState } from 'react'
import { Iproduct } from '../interface/product'

interface Iprops{
    product: Iproduct[]
}
const products = (props: Iprops) => {
    const [data, setdata]= useState<Iproduct[]>([])
    useEffect(()=>{
        setdata(props.product)
    },[props])
  return (
    <div>
        {
            data.map((item,index)=>{
                return <div key={index+1}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <a href={"/product/"+item.id}>Xem chi tiet</a>
                </div>
            })
        }
    </div>
  )
}

export default products