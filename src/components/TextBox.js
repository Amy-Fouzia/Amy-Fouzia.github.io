import React, { useState, useRef } from 'react';
import { Paper, IconButton, LinearProgress } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import '../App.css';
import Dropdown from './Dropdown';
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS, ABOUTME } from './Data';
import me from '../images/me.jpg';
import recording from '../audio/myName.m4a'; 
import GitHubCard from './GitHubCard';

const TextBox = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const calculateProgress = () => {
    const audio = audioRef.current;
    if (!audio || audio.duration === Infinity || isNaN(audio.duration)) {
      return 0;
    }
    return (currentTime / audio.duration) * 100;
  };

  let renderedText;

  if (text === 'homeText') {
    renderedText = (
      <div className='AboutMe'>
        
        <img src={me} alt="Me" style={{width: '30%', height: 'auto',}} className="MyImage"/>
          
        <div className="info-container">
          <p>
            <div className='audio'>
              Hello! My name is Amy Fouzia. 
              <IconButton onClick={handlePlay} disabled={isPlaying} className="play-button">
                <PlayCircleOutline />
              </IconButton>
              <LinearProgress variant="determinate" value={calculateProgress()} className="progress-bar" />
              <audio
                ref={audioRef}
                src={recording}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)} />
              </div>
            <br></br>

            {ABOUTME.AboutOne}
            <br></br>
            <br></br>
            {ABOUTME.AboutTwo}
            <br></br>
            <br></br>
            {ABOUTME.email}
            &nbsp;or connect with me on <a href="https://www.linkedin.com/in/amy-fouzia/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
          </p>
        </div>

      </div>
    );
  } else if (text === 'resumeText') {
    renderedText = (
      <div className='Resume'>
        <Dropdown title="EDUCATION" data={EDUCATION} />
        <Dropdown title="EXPERIENCE" data={EXPERIENCE} />
        <Dropdown title="PROJECTS" data={PROJECTS} />
        <Dropdown title="SKILLS/INTERESTS" data={SKILLS} />
      </div>
    );
  } else if (text === 'projectText') {
    renderedText = (
      <div className='Project'>
        <h1 style={{ color: 'aliceblue' }} >My GitHub Projects</h1>
        <h3 style={{ color: 'aliceblue' }} >Database</h3>
        <GitHubCard username= "Amy-Fouzia" repoName="Grade-Portal" />
        <h3 style={{ color: 'aliceblue' }} >Group Project</h3>
        <GitHubCard username= "FJada" repoName="JALT" />
        <GitHubCard username= "FJada" repoName="JALT-Frontend" />
        <h3 style={{ color: 'aliceblue' }} >OpenGL/C++ Games</h3>
        <GitHubCard username= "Amy-Fouzia" repoName="Fireboy-and-Watergirl" />
        <GitHubCard username= "Amy-Fouzia" repoName="Platformer" />
        <GitHubCard username= "Amy-Fouzia" repoName="Rise-of-the-AI" />
        <GitHubCard username= "Amy-Fouzia" repoName="Lunar-Lander" />
        <GitHubCard username= "Amy-Fouzia" repoName="Pong-Clone" />
        <h3 style={{ color: 'aliceblue' }} >WebApps</h3>
        <GitHubCard username= "Amy-Fouzia" repoName="Gallery" />
        <GitHubCard username= "Amy-Fouzia" repoName="Bored" />
      </div>
    );
  } else if (text === 'hobbiesText') {
    renderedText = (
      <div className='Hobbies'>
        hobby text
      </div>
    );
  } else {
    renderedText = 'No text specified.';
  }

  return (
    <Paper
      elevation={3}
      className="textBox"
      sx={{ backgroundColor: '#829bc4', padding: '20px' }}
    >
      <div className="textBox-content">{renderedText}</div>
    </Paper>
  );
};

export default TextBox;
