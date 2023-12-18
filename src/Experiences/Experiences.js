import React, { useState } from "react";
import "./Experiences.css";
import { Grid, Typography } from "@mui/material";
import Companies from "./companies";

const Experiences = () => {
    const [experiece, setExperience] = useState(Companies)
  return (
    <div className="experience-cont">
    <h1 className="experience-heading">Experiences</h1>
    <Grid container spacing={2}>
        
        {
            experiece.map((exp, id) => (
                <Grid 
                item xs={12} 
                sm={12} 
                md={6} 
                lg={6} 
                
                >
<img src={exp.url} alt={exp.name} className="company-image"/>

<Typography variant="body" className="time">{exp.name}</Typography>
<Typography cariant="body" className="date">{exp.experience}</Typography>
                </Grid>
            ))
        }

    </Grid>
    </div>
  );
};

export default Experiences;
