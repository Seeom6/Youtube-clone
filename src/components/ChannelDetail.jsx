import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos ,ChannelCard} from './'
import { fetchAPI } from "../utils/FetchAPI"


const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(()=>{

  fetchAPI(`channels?part=snippet&id=${id}`)
  .then((data)=>setChannelDetail(data?.items[0]))
  fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
  .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,221,230,1) 0%, rgba(255,0,242,1) 100%, rgba(121,9,105,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10 , height: '300px'}}
        />  
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail