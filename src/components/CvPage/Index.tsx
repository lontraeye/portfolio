import React from 'react';
import { useTheme } from '@mui/material';
import './index.css';
import ProfilePicture from '../ProfilePicture';
import Header from '../Header';

import wave from '../../assets/wave-haikei.svg';
import History from '../History';
import Education from '../Education';

const CvPage = () => {
    const theme = useTheme();

    return (
        <div className="background overflow-x-hidden" style={{ backgroundColor: theme.palette.background.default }}>
            <div className="page" style={{ backgroundColor: theme.palette.background.paper }}>

                <img src={wave} className="wave" alt="wave" />
                <div className="header flex flex-col sm:flex-row items-center sm:items-start">
                    <ProfilePicture />
                    <Header />
                </div>
                <div className='body'>
                    <History />
                    <Education />
                </div>
            </div>
        </div>
    );
};

export default CvPage;