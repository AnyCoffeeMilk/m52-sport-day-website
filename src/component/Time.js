import { useState } from "react"
import timetable from "../data/timetable"
import CompeTimeline from "./CompeTimeline"

export default function Time() {
    const [select, setSelect] = useState('男甲')
    const teams = ['男甲', '男乙', '男丙', '男丁', '女甲', '女乙', '女丙', '女丁']
    const teamsList = teams.map((team, i) => (
        <div key={i} className="cursor-pointer"
            onClick={() => setSelect(team)}
        >{team}</div>
    ))
    const timetableList = timetable[select].map((table, i) => (
        <div key={i}>
            <div className="h-24 px-4 my-4 mx-6 text-3xl flex justify-between items-center bg-red-400 text-white">
                <div>{ table.day }</div>
                <div className="text-lg">{ table.date }</div>
            </div>
            <div className="flex my-10">
                <CompeTimeline table={table.table} />
            </div>
        </div>
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