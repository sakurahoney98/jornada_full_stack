import React from 'react'
import ItemList from './ItemList'


export const Main = () => {
  return (
    <div className='main'>
      
      <ItemList title="Artistas Populares" items = {5}/>
      <ItemList title="Músicas Populares" items = {10}/>
        


    </div>
  )
}
