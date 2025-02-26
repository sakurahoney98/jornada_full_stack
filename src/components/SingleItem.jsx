import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function SingleItem(obj) {
  return (
    
   <Link className='single-item' to={`${obj.idPath}/${obj.id}`}>
    <div className='single-item__div-image-button'>
    <div className='single-item__div-image'>
        <img className='single-item__image' src={obj.image} alt="" />
        </div>
        <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon'/>
        
    </div>
       
        <div className='single-item__texts'>
       <div className='single-item__2-lines'>
        <div className='single-item__title'>
        <p>{obj.name}</p>
        </div>
        <div className='single-item__type'>
         
        <p>{obj.artist ?? "Artista"}</p>
        </div>
   
       </div>
        </div>
    </Link>
  )
}

export default SingleItem