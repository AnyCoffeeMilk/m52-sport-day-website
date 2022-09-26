export default function TeamBtn({ team, selected, onClick }) {
    const handleClass = () => {
        if (selected === team) {
            return "cursor-pointer font-semibold text-blue-500 border-b-2 border-blue-500"
        } else {
            return "cursor-pointer font-semibold text-gray-400"
        }
    }

    return (
        <div className={handleClass()}
            onClick={() => onClick(team)}
        >{team}</div>
    )
}