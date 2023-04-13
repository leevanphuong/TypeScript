import React from 'react'
import { Button } from 'antd'

const Hompage = () => {
  return (
    <div>
        <h3>Hompage</h3>
        <br />
        <br />
        <Button><a href="/dangky">Sigin</a></Button>
        <br />
        <br />
        <Button><a href="/admin">Admin</a></Button>
        <br />
        <br />
        <Button><a href="/products">Products</a></Button>

    </div>
  )
}

export default Hompage