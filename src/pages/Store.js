import React, { useState } from 'react'
import items from "../data/items.json"
import StoreItem from '../components/StoreItem'
export const Store = () => {
  const [data, setData] = useState(items)
  console.log(data);
  const allItems=data.length>0?data.map((item,index)=>(
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <StoreItem key={index} data={item}/>
    </div>
  )):""
  return (
    <div className='container'>
      <h1>Store</h1>
      <div className='row'>
        
        {allItems}
      </div>
    </div>
  )
}
