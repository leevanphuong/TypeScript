import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { getOne } from '../api/product'

const Productdetails = () => {
    const {id}:any = useParams()
    const [details, setdatails]= useState<any>({})
    useEffect(()=>{
        getOne(id).then(({data})=> setdatails(data))
    },[])
  return (
    <div>
        <h3>Productdetails</h3>
        <br />
        <h4>{details.name}</h4>
        <p>{details.price}</p>
    </div>
  )
}

export default Productdetails