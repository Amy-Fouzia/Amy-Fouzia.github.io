import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = ({ title, data }) => {
  return (
    <div className="dropdown-container">
      <Accordion style={{ width: '1000px' }}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#829bc4' }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ fontSize: '1rem', color: 'gray', lineHeight: '1.5' }}>
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                {Array.isArray(value) ? (
                  value.map((item, idx) => {
                    const isBold = item.startsWith('bold');
                    const displayText = isBold ? item.replace('bold', '').trim() : item;
                    return (
                      <p 
                        key={idx} 
                        style={{
                          margin: '5px 0',
                          fontWeight: isBold ? 'bold' : 'normal',
                        }}
                      >
                        {displayText}
                      </p>
                    );
                  })
                ) : (
                  <p
                    style={{
                      fontWeight: value.startsWith('bold') ? 'bold' : 'normal',
                    }}
                  >
                    {value.startsWith('bold') ? value.replace('bold', '').trim() : value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dropdown;
