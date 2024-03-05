import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = ({ title, data }) => {
  return (
    <div className="dropdown-container">
      <Accordion style={{ maxWidth: '900px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>Name: {data.name}</p>
            <p>Graduation Date: {data.graduationDate}</p>
            <p>Major: {data.major}</p>
            <p>Minors: {data.minors.join(', ')}</p>
            <p>GPA: {data.gpa}</p>
            <p>Relevant Coursework: {data.relevantCoursework.join(', ')}</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dropdown;
