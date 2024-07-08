import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface EducationItem {
  course: string;
  institution: string;
  startYear: string;
  endYear: string;
  degree: string;
}

const educations: EducationItem[] = [
  {
    course: 'Engenharia da computação',
    institution: 'Unipar, Cascavel',
    startYear: '2019',
    endYear: '2022',
    degree: 'Bacharel',
  },
];

const EducationComponent = () => {
  return (
    <div className='overflow-y-auto max-h-[calc(100vh-180px)]'>
      <Container>
        <Typography variant="h1" fontSize={20} fontWeight={'bolder'} margin={3} gutterBottom>
          Histórico Acadêmico
        </Typography>
        <Box sx={{ ml: 3 }}>
          {educations.map((edu, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                pl: '32px',
              }}
            >
              <Box sx={{ ml: '16px', maxWidth: 'calc(100vw - 112px)' }}>
                <Typography variant="h2" fontSize={20} fontWeight="bold" sx={{ maxWidth: '100%' }}>
                  {edu.course} | {edu.institution}
                </Typography>
                <Typography variant="h2" fontSize={10} gutterBottom>
                  {edu.startYear} - {edu.endYear}
                </Typography>
                <Typography variant="h2" fontSize={15}>
                  {edu.degree}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default EducationComponent;