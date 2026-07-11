import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';
import { X } from 'lucide-react';

const CollectionCard = ({item}) => {

 const dispatch = useDispatch()
 const removeFromCollection = (item) =>{
    //  console.log('remove!!',item);        
     dispatch(removeCollection(item.id))
     dispatch(removeToast())
 }


  return (
    <div className='relative bg-white  rounded mb-4 h-full w-full overflow-hidden'>
   
      <a target='_blank' className='h-full relative bg-amber-100' href={item.url}>

      {item.type == 'Photo' ? <img src={item.src} alt='img' className='h-full w-full object-cover object-center rounded hover:scale-120 transition-transform duration-200 '/> : ''}
      {item.type == 'Videos' ? <video autoPlay muted loop src={item.src}  className='h-full w-full object-cover object-center rounded'></video> : ''}
      {item.type == 'GIF' ? <img src={item.src} alt='gif.' className='h-full w-full object-cover object-center rounded'/> : ''}
      </a>

        <div className=' flex w-full bottom-0 z-50 p-2 bg-gradient-to-b from-transparent to-black justify-between gap-3 absolute items-center '>
        <h2 className='text-sm font-semibold capitalize h-9 '>
        {item.title}
        </h2>
        <div className='justify-center items-center z-30 '>
        <button 
        onClick={()=>{
          removeFromCollection(item);
        }}
        className='bg-black/50 hover:bg-black rounded h-7 w-7 flex justify-center items-center active:scale-90  duration-175  cursor-pointer z-40 ' 
        >
         <X className='text-red-600 size={20} hover:text-red-500'/>
          </button>
        </div>
        </div>
    </div>

  )
}

export default CollectionCard
