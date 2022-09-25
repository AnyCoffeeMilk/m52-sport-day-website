import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InfoIcon from '@mui/icons-material/Info';

const tabs = [
    {
        type: 'home',
        text: '主頁',
        icon: <HomeIcon fontSize='large' />
    },{
        type: 'timetable',
        text: '賽程表',
        icon: <EventNoteIcon fontSize='large' />
    },{
        type: 'results',
        text: '比賽成績',
        icon: <LeaderboardIcon fontSize='large' />
    },{
        type: 'photos',
        text: '校運相簿',
        icon: <PhotoLibraryIcon fontSize='large' />
    },{
        type: 'about',
        text: '關於',
        icon: <InfoIcon fontSize='large' />
    },
]

export default tabs