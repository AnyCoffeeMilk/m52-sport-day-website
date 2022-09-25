import { useState } from "react"
import timetable from "../data/timetable"
import TimeTableBlock from "./components/TimeTableBlock"

export default function TimeTables() {
    const [select, setSelect] = useState('男甲')
    const teams = ['男甲', '男乙', '男丙', '男丁', '女甲', '女乙', '女丙', '女丁']
    
    const teamsList = teams.map((team, i) => (
        <div key={i} className="cursor-pointer"
            onClick={() => setSelect(team)}
        >{team}</div>
    ))

    const timetableList = timetable[select].map((table, i) => (
        <TimeTableBlock table={table} index={i} key={i} />
    ))

    return (
        <div className="m-4">
            <div className="py-4 border rounded-lg flex justify-evenly shadow-sm">
                { teamsList }
            </div>
            <div className="md:grid grid-cols-3">
                { timetableList }
            </div>
        </div>
    )
}