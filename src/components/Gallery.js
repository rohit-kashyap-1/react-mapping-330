import React, { useEffect, useState } from 'react'

export default function Gallery() {
let [images,setImages] = useState([])
useEffect(function(){
    fetch('https://picsum.photos/v2/list').then(response=>response.json()).then(function(data){
        setImages(data)
    })
},[])
  return (
    <div>
        <div className='grid' style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',gridAutoRows:'auto',gap:'20px' }}>
           {(images.length!=0)?images.map(function(item){
            return <img key={item.id} src={item.download_url} className='img-fluid' />
           }):''}
        </div>
    </div>
  )
}
