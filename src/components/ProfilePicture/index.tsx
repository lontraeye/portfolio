import React from 'react';
import './index.css';
import { useTheme } from '@mui/material';
import pfp from '../../assets/pfp-nobg.jpeg'

const ProfilePicture = () => {

    const theme = useTheme();

    const bgstyle = {
        background: `linear-gradient(135deg, ${theme.palette.background.default} 25%, transparent 25%) -25px 0/ 50px 50px, 
                     linear-gradient(225deg, ${theme.palette.background.paper} 25%, transparent 25%) -25px 0/ 50px 50px, 
                     linear-gradient(315deg, ${theme.palette.background.default} 25%, transparent 25%) 0px 0/ 50px 50px, 
                     linear-gradient(45deg, ${theme.palette.background.paper} 25%, ${theme.palette.secondary.main} 25%) 0px 0/ 50px 50px`,
        overflow: 'hidden'
    };

    return (
        <div className='framing' style={bgstyle}>
            <img src={pfp} className="pfp" />
        </div>
    );
};

export default ProfilePicture;
