import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import {useNavigate} from "react-router-dom"


interface Iprops{
    onAdd: Function
}
const Addproduct = (props: Iprops) => {
    const naviga = useNavigate()
    const onFinish = (values: any) => {
            props.onAdd(values)
            naviga('/admin')
            message.success("them san pham thanh cong")
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
         <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="cateId"
      name="cateId"
      rules={[{ required: true, message: 'Please input your cateId!' }]}
    >
      <Input/>
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Addproduct