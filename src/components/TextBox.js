import React, { useState, useRef } from 'react';
import { Paper, IconButton, LinearProgress } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import '../App.css';
import Dropdown from './Dropdown';
import { NYU, L3Harris, Cooper, Subway, Games, Contact, AboutMe } from './Data';
import me from '../images/me.jpg';
import recording from '../audio/myName.m4a'; 

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
        
        <img src={me} alt="Me" className="MyImage"/>
          
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

            {AboutMe.About} 

          </p>
        </div>

      </div>
    );
  } else if (text === 'resumeText') {
    renderedText = <Dropdown title="EDUCATION" data={NYU} />;
  } else if (text === 'contactText') {
    renderedText = 'This is contact text.';
  } else if (text === 'projectText') {
    renderedText = 'This is project text.';
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
