import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import './ProjectData.css';

const ProjectCard = ({name, repo, clone, languages}) => {
  return (
    <Card sx={{ width:"500px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
        <div className='repo-links'>
        <Link className="clone" to={clone} download={clone}>Clone Project</Link>
        <Link className="repo" to={repo} target="_blank">Repo</Link>
        </div>
        <Divider variant="middle" sx={{paddingTop:"30px", color:"#111111"}} />
      </CardContent>
      <Typography variant="body" sx={{paddingTop:"25px", paddingLeft:"10px"}}>
Languages :
<div className='languages'>
<div className='javascript'>{languages.Javascript}</div> 
{" "} 
<div className='html'>{languages.HTML}</div>
 {" "} 
 <div className='css'>{languages.CSS}</div>
 </div> 
      </Typography>
      <Typography sx={{paddingTop: "25px", paddingBottom:"25px", paddingLeft:"10px"}}>Stars</Typography>
    </Card>
  )
}

export default ProjectCard
