import { Typography, useTheme } from '@mui/material';
import React from 'react';

import './index.css'

const Header = () => {

    const theme = useTheme();

    return (
        <div className='info'>
            <Typography variant='h1' fontWeight={'bolder'} fontSize={36}>LUCAS CARDOZO</Typography>
            <Typography variant='h2' fontSize={15}>lucascardozo73@gmail.com</Typography>
            <Typography variant='h2' fontSize={15}>(45) 98809 - 5546</Typography>
            <Typography variant='h2' fontSize={10} color={theme.palette.primary.main}>Java, Javascript e Typescript.</Typography>
            <Typography variant='h2' fontSize={10}>Toledo - Parana</Typography>
            
        </div>
    );
}

export default Header;