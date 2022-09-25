import CompeTimeline from "./CompeTimeline"

export default function TimeTableBlock({ table, index }) {
    return (
        <div key={index}>
            <div className="h-24 px-4 my-4 md:mx-3 text-3xl flex justify-between items-center bg-red-400 text-white">
                <div>{ table.day }</div>
                <div className="text-lg">{ table.date }</div>
            </div>
            <div className="flex my-7">
                <CompeTimeline table={table.table} />
            </div>
        </div>
    )
}