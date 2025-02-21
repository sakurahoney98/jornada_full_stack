import React from 'react'
import SingleItem from './SingleItem'
import {artistArray} from '../assets/database/artists'

const ItemList = ({title, items}) => {
   
  return (
    
    <>
    
    <div className='item-list'>

<div className='item-list__header'>
     <h2>{title}</h2>
     <a className='item-list__link' href="/">Mostrar tudo</a>

 </div>

 <div className='item-list__container'>
    
 {
  artistArray.map((currentValue, index) => <SingleItem key={index}/>)
}
    
  

 

 </div>
</div>

    </>
    
    
    
    
  )
}

export default ItemList