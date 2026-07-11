import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
  // console.log(item.src)
  // console.log(item.url)

  const dispatch = useDispatch()
  
  const addToCollection = (item)=>{
      // console.log("btn clicked");
      // const oldData = JSON.parse(localStorage.getItem("collection")) || []
      // console.log(oldData);

      // oldData.push(item);
      // localStorage.setItem("collection", JSON.stringify(oldData))
      // console.log("Saved successfully");
      
      dispatch(addCollection(item));
      console.log("added!");
      dispatch(addedToast())
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
          addToCollection(item);
          
          
        }}
        className='bg-blue-600 h-7 text-white font-semibold px-3 py-2 rounded flex justify-center text-sm items-center active:scale-90  duration-175 overflow-hidden cursor-pointer z-40' 
        >
          Save 
          </button>

        </div>

        </div>
      
    </div>
  )
}

export default ResultCard
