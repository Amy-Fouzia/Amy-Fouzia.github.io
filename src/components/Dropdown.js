import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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
            {Object.entries(data).map(([key, value]) => (
              <p key={key}>{value}</p>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dropdown;
