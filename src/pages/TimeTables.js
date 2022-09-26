import { useState } from "react"
import timetable from "../data/timetable"
import TimeTableBlock from "./components/TimeTableBlock"
import TeamBtn from "./components/TeamBtn"

export default function TimeTables() {
    const [select, setSelect] = useState('男甲')
    const teams = ['男甲', '男乙', '男丙', '男丁', '女甲', '女乙', '女丙', '女丁']
    
    const teamsList = teams.map((team, i) => (
        <TeamBtn key={i}
            team={team}
            selected={select}
            onClick={(team) => setSelect(team)}
        />
    ))

    const timetableList = timetable[select].map((table, i) => (
        <TimeTableBlock table={table} index={i} key={i} />
    ))

    return (
        <div className="m-4">
            <div className="py-4 flex justify-evenly max-w-[700px] m-auto">
                { teamsList }
            </div>
            <div className="md:grid grid-cols-3">
                { timetableList }
            </div>
        </div>
    )
}