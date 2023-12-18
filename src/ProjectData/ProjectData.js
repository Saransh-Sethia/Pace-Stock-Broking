import React, {useState} from 'react';
import './ProjectData.css';
import Projects from '../Projects';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';

const ProjectData = () => {

    const [projects, setProjects] = useState(Projects);
  return (
    <Box sx={{ flexGrow: 1 }} className='project-data'>
        <div className='recent-projects'>Recent Projects</div>
      <Grid container spacing={2} sx={{display:"flex", justifyContent:"center", alignItems:"space-between"}} >
        {
            projects.map((project, id) => (
                <Grid item xs={12} sm={12} md={6} lg={6} key={id}>
          <ProjectCard {...project}/>
                </Grid>
            ))
        }

      </Grid>
    </Box>
  )
}

export default ProjectData
