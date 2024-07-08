import React from 'react';
import './index.css';
import { useTheme } from '@mui/material';
import pfp from '../../assets/pfp-nobg.jpeg'

const ProfilePicture = () => {
    const theme = useTheme();

    const bgstyle = {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `radial-gradient(${theme.palette.secondary.main} 2px, ${theme.palette.background.paper} 2px)`,
        backgroundSize: '40px 40px',
        overflow: 'hidden'
    };

    return (
        <div className='framing w-36 h-36 sm:mt-0 mt-5 sm:w-72 sm:h-full object-cover sm:rounded-t rounded-full' style={bgstyle}>
            <img src={pfp} alt='pfp' className="pfp" />
        </div>
    );
};

export default ProfilePicture;
