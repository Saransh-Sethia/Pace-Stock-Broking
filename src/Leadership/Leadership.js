import React from "react";
import "./Leadership.css";
import { Grid, Typography } from "@mui/material";
import Carousel from "./Carousel";

const Leadership = () => {
  return (
    <div className="leadership-container">
    <Typography variant="h1" className="leadership-heading">Leadership</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography variant="body" className="leadership-text">
        As a React developer with leadership experience, I bring technical
        expertise, project management skills, and strong communication abilities
        to the table. I have a proven track record of building large-scale
        applications, optimizing code for performance, and implementing best
        practices. Additionally, I have experience leading teams and projects,
        creating and maintaining project plans, managing timelines and budgets,
        and ensuring timely delivery of high-quality work. I excel at
        communicating effectively with team members, stakeholders, and clients,
        both verbally and in writing, and am a skilled listener who can provide
        clear and constructive feedback. I am also passionate about mentoring
        and training other developers to help them develop their skills and
        achieve their goals. With my ability to solve complex technical problems
        and think creatively, I am always up-to-date with the latest
        developments in React and related technologies, and am able to innovate
        and inspire a positive, collaborative work environment.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
<Carousel />
      </Grid>
    </Grid>
    </div>
  );
};

export default Leadership;
