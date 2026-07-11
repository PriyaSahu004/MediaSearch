import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'


const SearchBar = () => {
const [text, setText] = useState('')

const dispatch = useDispatch()


const submitHandler = (e)=>{
    e.preventDefault()

    dispatch(setQuery(text))
    setText('')
    
}
  return (
    <div>
      <form action="" className='px-10 py-7 flex' onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        required
        placeholder='Search Anything' 
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
            
        }}
        
        className='bg-gray-700 p-3 rounded-l
        outline-none w-full'/>
        <button type='submit' className='bg-blue-600 p-3 rounded-r active:scale-95 active:rounded hover:bg-blue-500 cursor-pointer' onClick={()=>{
          
        }}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
