import ResultTable from "./ResultTable";
import AddIcon from '@mui/icons-material/Add';

export default function ResultBlock({ result, selected, index, onClick }) {
    return (
        <div className="cursor-pointer text-lg border-b py-4 px-2 mx-2" 
            onClick={() => onClick(index)} key={index}
        >
            <div className="flex justify-between items-center py-4">
                <div className="font-semibold">
                    <div>
                        {result.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                        {result.time}
                    </div>
                </div>
                <div className={
                    "text-3xl flex items-center align-top origin-center select-none " + (
                        selected === index ? "rotate-45" : ""
                    )
                }
                ><AddIcon /></div>
            </div>
            {selected === index ? <ResultTable content={result.content} /> : null}
        </div>
    )
}