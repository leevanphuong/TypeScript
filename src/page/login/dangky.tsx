import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import {useNavigate} from "react-router-dom"
import { addUser } from '../../api/user';


interface Iprops{
    onAdd: Function
}
const Dangky = (props: Iprops) => {
    const naviga = useNavigate()
    const onFinish = async (data: any) => {
            const {data: user} = await  addUser(data)
            localStorage.setItem('user', JSON.stringify(user))
            props.onAdd(data)
            naviga('/')
            message.success("Dang ky thanh cong")
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
      label="email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password/>
    </Form.Item>

    <Form.Item
      label="role"
      name="role"
      rules={[{ required: true, message: 'Please input your role!' }]}
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

export default Dangky