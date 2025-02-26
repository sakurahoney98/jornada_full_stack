import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import {songsArray} from '../assets/database/songs'


export const Main = () => {
  return (
    <div className='main'>
      
      <ItemList title="Artistas Populares" items = {5} itemsArray={artistArray} path="/artists" idPath = "artist"/>
      <ItemList title="Músicas Populares" items = {10} itemsArray={songsArray} path="/songs" idPath = "song"/>
        


    </div>
  )
}
