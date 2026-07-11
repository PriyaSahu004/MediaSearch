import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { Trash2 } from 'lucide-react'
import { clearCollection} from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items)
  // console.log(collection);
  const dispatch = useDispatch()
  const removeAllCollection = ()=>{
     dispatch(clearCollection())
  }
  return (
    <div >
      {collection.length > 0 ? <div className='flex justify-between mx-10 mt-5 items-center '>
      <h2 className='w-fit  bg-gray-700 px-10 py-2 rounded'>Your Collection -</h2>
      <div className='relative inline-block group'>
      <button className='bg-red-700 cursor-pointer  hover:bg-red-600 active:scale-90 w-fit px-4 py-2 rounded' onClick={()=>{
        removeAllCollection()

      }
      }><Trash2/></button>
      <p className='absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap bg-black-/80 text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200'
      >Remove Collection</p>
      </div>

      </div> : <h2 className='mx-10 mt-5 font-medium text-2xl underline'>Collection is Empty</h2>}

    <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5  xl:columns-5  gap-4 px-10 py-8'>
      {collection.map(item => (
        <div key={item.id}>
          <CollectionCard item={item} />
        </div>
      
    ))}
      
    </div>
    </div>
  )
}

export default CollectionPage



