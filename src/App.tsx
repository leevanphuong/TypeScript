import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Hompage from './page/Hompage'
import { addPro, getAll, removeProduct, updatePro } from './api/product'
import Products from './page/products'
import Productdetails from './page/Productdetails'
import { Iproduct } from './interface/product'
import ProductManager from './page/admin/productManager'
import UpdateProduct from './page/admin/UpdateProduct'
import Addproduct from './page/admin/Addproduct'
import { addUser, getUser } from './api/user'
import Dangky from './page/login/dangky'

function App() {
  const [products, setproduct] = useState<Iproduct[]>([])
  useEffect(() => {
    getAll().then(({ data }) => setproduct(data))
  }, [])
  const removePro=(id:number)=>{
    removeProduct(id).then(()=> setproduct(products.filter((item:any)=> item.id != id)))
  }
  const addItem=(product: Iproduct)=>{
    addPro(product).then(()=> setproduct([...products,product]))
  }
  const updateitem=(product:Iproduct)=>{
    updatePro(product).then(()=> setproduct(products.map((item:any)=>{
      if(item.id == product.id){
        return product
      }
      else{
        return item
      }
    })))
  }
  const [users,setuser]= useState<any>([])
  useEffect(()=>{
    getUser().then(({data})=> setuser(data))
  },[])
  const UserAdd=(user:any)=>{
    addUser(user).then(()=> setuser([...users, user]))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path='/products' element={<Products product={products} />} />
        <Route path='/product/:id' element={<Productdetails/>} />
        <Route path='/dangky' element={<Dangky onAdd={UserAdd}/>} />

        <Route path='/admin' element={<ProductManager onRemove={removePro} product={products}/>} />
        <Route path='/admin/add' element={<Addproduct onAdd={addItem}/>} />
        <Route path='/admin/:id/update' element={<UpdateProduct onUpdate={updateitem} product={products}/>} />
        



      </Routes>
    </div>
  )
}

export default App
