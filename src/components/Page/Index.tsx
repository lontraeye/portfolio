import { useTheme } from '@mui/material';
import './index.css'
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import Header from '../Header';

import wave from '../../assets/wave-haikei.svg'

const Page = ({ }) => {

    const theme = useTheme();

    return (
        <div className='background' style={{ backgroundColor: theme.palette.background.default }}>
            <div className='page' style={{ backgroundColor: theme.palette.background.paper }}>
            <img src={wave} className='wave' />
                <div className='header'>
                    <ProfilePicture />
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Page;