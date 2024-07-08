import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface Job {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

const jobs: Job[] = [
    {
        title: 'Desenvolvedor',
        company: 'Maxicon, Toledo',
        startDate: 'Abr 2023',
        endDate: 'Set 2023',
        description: 'Trabalhei com Java e React Native majoritariamente. Documentação com swagger e postman.',
    },
    {
        title: 'Analista QA',
        company: 'TOTVS, Cascavel',
        startDate: 'Jun 2021',
        endDate: 'Mar 2023',
        description: 'Trabalhei com testes manuais, documentaçāo usando postman e jira para controle.',
    },
    {
        title: 'Suporte Tecnico',
        company: 'Cartāo de Todos, Cascavel',
        startDate: 'Out 2020',
        endDate: 'Abr 2021',
        description: 'Manutençāo e resoluçāo de problemas gerais ligados a informática.',
    },
    {
        title: 'Estagiário Programador',
        company: 'Syngular Systems, Cascavel',
        startDate: 'Ago 2020',
        endDate: 'Set 2020',
        description: 'Curto estágio que fiz durante o curso. Conheci Java e como um ambiente profissional tech funciona.',
    },
];

const History = () => {
    const theme = useTheme();

    return (
        <div className='overflow-y-auto max-h-[calc(100vh-180px)]'>
            <Container>
                <Typography variant="h1" fontSize={20} fontWeight={'bolder'} margin={3} gutterBottom>
                    Histórico Profissional
                </Typography>
                <Box sx={{ position: 'relative', ml: 3 }}>
                    {/* Linha vertical */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '9px',
                            top: '10px',
                            bottom: 0,
                            width: '2px',
                            backgroundColor: theme.palette.primary.main,
                        }}
                    />

                    {jobs.map((job, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                mb: 4,
                                pl: '32px',
                            }}
                        >
                            {index < jobs.length - 1 ? (
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.primary.main,
                                        position: 'absolute',
                                        left: '5px',
                                        top: '10px',
                                    }}
                                />
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            position: 'absolute',
                                            left: '5px',
                                            top: '10px',
                                        }}
                                    />
                                    {/* Continuação da linha vertical */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: '9px',
                                            top: '20px',
                                            height: 'calc(100% - 30px)', // Altura da linha menos a posição inicial e final
                                            width: '2px',
                                            backgroundColor: theme.palette.primary.main,
                                        }}
                                    />

                                    {/* Ícone de seta */}
                                    <ArrowDownwardIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                            position: 'absolute',
                                            left: '0',
                                            top: 'calc(100% - 5px)',
                                            color: theme.palette.primary.main,
                                        }}
                                    />
                                </>
                            )}
                            {/* Detalhes do trabalho */}
                            <Box sx={{ ml: '16px', maxWidth: 'calc(100vw - 112px)'}}>
                                    <Typography className="truncate hover:text-balance" variant="h2" fontSize={20} fontWeight="bold" sx={{ maxWidth: '100%' }}>
                                        {job.title} | {job.company}
                                    </Typography>
                                <Typography variant="h2" fontSize={10} gutterBottom>
                                    {job.startDate} - {job.endDate}
                                </Typography>
                                <Typography variant="h2" fontSize={15} sx={{ maxWidth: '100%' }}>
                                    {job.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </div>
    );
};

export default History;