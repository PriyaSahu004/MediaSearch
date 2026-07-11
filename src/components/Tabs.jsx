import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    const tabs = ["Photos","Videos","GIF"]
  return (
    <div className='flex gap-5 mx-10'>
      {
        tabs.map((elem,idx)=>{
            return <button key={idx} className={`${(activeTab == elem ? 'bg-green-600' : 'bg-gray-600')} px-4 py-2 rounded transition active:scale-85   cursor-pointer uppercase`}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            
            >
                {elem}
                </button>
            
            
            
            
           
        })
      }
    </div>
  )
}

export default Tabs
