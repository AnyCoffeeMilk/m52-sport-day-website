import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

export default function Navbar() {
    const [loc, setLoc] = useState(() => {
        const url = window.location.href
        if (url.includes('timetable')) {
            return 1
        } else if (url.includes('result')) {
            return 2
        } else if (url.includes('photos')) {
            return 3
        } else if (url.includes('about')) {
            return 4
        } else {
            return 0
        }
    })
    return (
        <div className='bg-white text-gray-400 shadow flex justify-evenly pt-2 pb-5 sticky top-0'>
            <a className='relative' href='/#' onClick={() => setLoc(0)}>
                <div style={loc === 0 ? { color: "#668dff" } : {}}
                    className={'absolute bottom-[-13px] left-[5px] text-xs whitespace-nowrap'}
                >
                    主頁
                </div>
                <HomeIcon fontSize='large' sx={
                    { color: loc === 0 ? "#668dff" : "lightgray" }
                } />
            </a>
            <a className='relative' href='/#/timetable' onClick={() => setLoc(1)}>
                <div style={loc === 1 ? { color: "#668dff" } : {}}
                    className='absolute bottom-[-13px] left-1.25 text-xs whitespace-nowrap'
                >
                    賽程表
                </div>
                <EventNoteIcon fontSize='large' sx={
                    { color: loc === 1 ? "#668dff" : "lightgray" }
                } />
            </a>
            <a className='relative' href='/#/result' onClick={() => setLoc(2)}>
                <div style={loc === 2 ? { color: "#668dff" } : {}}
                    className='absolute bottom-[-13px] left-[-6px] text-xs whitespace-nowrap'
                >
                    比賽成績
                </div>
                <LeaderboardIcon fontSize='large' sx={
                    { color: loc === 2 ? "#668dff" : "lightgray" }
                } />
            </a>
            <a className='relative' href='/#/photos' onClick={() => setLoc(3)}>
                <div style={loc === 3 ? { color: "#668dff" } : {}}
                    className='absolute bottom-[-13px] left-[-6px] text-xs whitespace-nowrap'
                >
                    校運相簿
                </div>
                <PhotoLibraryIcon fontSize='large' sx={
                    { color: loc === 3 ? "#668dff" : "lightgray" }
                } />
            </a>
            <a className='relative' href='/#/about' onClick={() => setLoc(4)}>
                <div style={loc === 4 ? { color: "#668dff" } : {}}
                    className='absolute bottom-[-13px] left-[5px] text-xs whitespace-nowrap'
                >
                    關於
                </div>
                <InfoIcon fontSize='large' sx={
                    { color: loc === 4 ? "#668dff" : "lightgray" }
                } />
            </a>
        </div>
    )
}