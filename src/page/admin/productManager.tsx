import React, { useEffect, useState } from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { Iproduct } from '../../interface/product';

interface Iprops{
    product: Iproduct[],
    onRemove: Function
}
const productManager = (props:Iprops) => {
    const [data, setdata]=useState<Iproduct[]>([])
    useEffect(()=>{
        setdata(props.product)
    },[])
    const removeItem=(id:number)=>{
        const check = confirm("Ban co muon xoa")
        if(check){
            props.onRemove(id)
        }
    }
    const columns: ColumnType<{ name: string; price: number; id: number; cateId: number; key: number; }>[] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
                <Button onClick={()=> removeItem(record.id)} > Xoa</Button>
                <Button> <a href={"/admin/"+record.id+"/update"}>Cap nhap</a></Button>
            </Space>
          ),
        },
      ];
      
const dataitem =props.product.map((item)=>{
        return {
            key: item.id,
            ...item
        
        }
    })

  return (
    <div>
        <Table columns={columns} dataSource={dataitem} />
        <a href="/admin/add">Them san pham</a>
    </div>
  )
}

export default productManager