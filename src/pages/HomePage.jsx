import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
const HomePage = () => {
  const {query}  = useSelector((store)=>store.search)

  return (
    <div>
     
      <SearchBar/>
     
      {query != '' ? <div><Tabs/><ResultGrid/></div> : ''}
    </div>
  )
}

export default HomePage
