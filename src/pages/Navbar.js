import NavTab from './components/NavTab';
import tabs from '../data/tabs'
import { useState } from 'react';

export default function Navbar() {
    const [curTab, setCurTab] = useState(() => {
        const startTab = window.location.href.split('/')[4]
        return (startTab === undefined) ? 'home' : startTab
    })

    const tabsList = tabs.map((tab, i) => {
        return <NavTab key={i}
            tabText={tab.text}
            curTab={curTab}
            onClick={(tabtype) => setCurTab(tabtype)}
            Icon={tab.icon}
            tabType={tab.type}
        />
    })

    return (
        <div className='pt-2 pb-2.5 bg-white z-10 text-gray-400 shadow flex justify-evenly sticky top-0'>
            { tabsList }
        </div>
    )
}