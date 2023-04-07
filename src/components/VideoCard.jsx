import { Link } from "react-router-dom"
import { Typography, Card , CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl , demoChannelTitle ,demoChannelUrl,
 demoVideoUrl ,demoVideoTitle} from "../utils/constant"


const VideoCard = ({video:{id:{videoId}, snippet}}) => {
  return (
    <Card sx={{width: { xs: '100%', sm: '358px' ,md: "320px"}, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title} sx={{width: {xs: '100%' ,sm: '358px', md:'320px'}, height: 180}}
            />
        </Link>
        <CardContent sx={{background: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` :demoVideoUrl}>
                <Typography variant="subtitle1" p={"4px"} textAlign={"center"} fontWeight={"bold"} color={'#fff'}>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channel ? `/channel/${snippet?.channelId}` :demoChannelUrl}>
                <Typography variant="subtitle2" p={"4px"} textAlign={"center"} fontWeight={"bold"} color={'gray'}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12 ,color: 'gray ' , marginLeft: "5px"}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard