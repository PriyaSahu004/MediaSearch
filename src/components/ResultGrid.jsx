import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGIF} from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults} from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'



const ResultGrid = () => {
    const {query, activeTab, results, loading, error}  = useSelector((store)=>store.search)
    
    const dispatch = useDispatch();
   useEffect(function(){
     if(!query.trim()){
        dispatch(setResults([]));
        return;
     }

     const getData = async ()=>{
 
        try {
            dispatch(setLoading())
        let data = [];
        if(activeTab == 'Photos'){
            
            let response = await fetchPhotos(query)
            // console.log(response.results);
           data = response.results.map((item)=>({
            id:item.id,
            type:'Photo',
            title:item.alt_description,
            thumbnail:item.urls.thumb ,
            src: item.urls.full,
            url:item.links.html
           }));
           
           

        }
        if(activeTab == 'Videos'){
            let response = await fetchVideos(query)
            // console.log(response.videos);
            
            data = response.videos.map((item)=>({
                id:item.id,
                type:'Videos',
                title: item.user.name || 'Video',
                duration:item.duration,
                thumbnail: item.image,
                src: item.video_files[0].link,
                url:item.url
            })); 
            
        }
        if(activeTab == 'GIF'){
            let response = await fetchGIF(query)
            
            // console.log(response.data);
            data = response.data.map((item)=>({
                id:item.id,
                title:item.title || 'GIF.',
                type:'GIF',
                thumbnail:item.images.preview_gif.url,
                src:item.images.original.url,
                url:item.url 
            }));
            
        }
        dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.message))
        }

    }

    getData()
     

    },[query, activeTab, dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1 className=' text-2xl ml-10 mt-10'>Loading...</h1>
   

  return (
    <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5  xl:columns-5  gap-4 px-10 py-4 mt-2'>
        {/* className=' flex flex-col flex-nowrap columns-5 overflow-auto px-10 py-5 w-full justify-between gap-4  scrollbar-none' */}
        {results.map((item, idx)=>{
            return <div key={idx} className='mb-4 break-inside-avoid'>
                <ResultCard item={item}/> 
            </div>
        })}
    </div>
  )
}
 
export default ResultGrid


