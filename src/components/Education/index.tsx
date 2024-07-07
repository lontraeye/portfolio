import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface Education {
  course: string;
  institution: string;
  startYear: string;
  endYear: string;
  degree: string;
}

const education: Education[] = [
  {
    course: 'Engenharia da computação',
    institution: 'Unipar, Cascavel',
    startYear: '2019',
    endYear: '2022',
    degree: 'Bacharel',
  },
];

const Education = () => {
  return (
    <Container>
      <Typography variant="h1" fontSize={20} fontWeight={'bolder'} margin={3} gutterBottom>
        Histórico Acadêmico
      </Typography>
      <Box sx={{ position: 'relative', ml: 3 }}>
        {education.map((edu, index) => (
          <Box key={index} sx={{ position: 'relative', pl: '32px', pb: index === education.length - 1 ? '0' : '40px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '0',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Box sx={{ ml: '32px'}}>
                <Typography variant="h2" fontWeight="bold" fontSize={15}>
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
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Education;