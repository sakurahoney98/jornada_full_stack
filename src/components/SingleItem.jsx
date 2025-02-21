import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


function SingleItem() {
  return (
   <a className='single-item' href="/">
    <div className='single-item__div-image-button'>
    <div className='single-item__div-image'>
        <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
        </div>
        <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon'/>
        
    </div>
       
        <div className='single-item__texts'>
       <div className='single-item__2-lines'>
        <div className='single-item__title'>
        <p>Henrique & Juliano</p>
        </div>
        <div className='single-item__type'>
        <p>Artista</p>
        </div>
   
       </div>
        </div>
    </a>
  )
}

export default SingleItem