import React from 'react'
import SingleItem from './SingleItem'
import { Link } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
   
  return (
    
    <>
    
    <div className='item-list'>

<div className='item-list__header'>
     <h2>{title}</h2>
     <Link className='item-list__link' to={path}>Mostrar tudo</Link>

 </div>

 <div className='item-list__container'>
 
 {
  
  itemsArray.filter((currentValue, index) => index < items)
  .map((currentValue, index) => <SingleItem {...currentValue} key={index} idPath = {idPath}/>)

}
    
  

 

 </div>
</div>

    </>
    
    
    
    
  )
}

export default ItemList