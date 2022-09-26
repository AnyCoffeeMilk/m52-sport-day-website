import { useState } from "react"
import fetchResults from '../data/fetchResults'
import ResultBlock from "./components/ResultBlock";
import SearchBar from "./components/SearchBar";

export default function Result() {
    const [word, setWord] = useState('')
    const [results, setResults] = useState([])
    const [select, setSelect] = useState(
        fetchResults().fetchCurrent((data) => {
            return setResults(data.results)
        })
    )

    const handleClick = (i) => {
        if (select === i) {
            setSelect()
        } else {
            setSelect(i)
        }
    }

    const filteredResults = results.filter((result) => {
        return result.name.includes(word)
    })
    
    const resultsList = filteredResults.map((result, i) => (
        <ResultBlock key={i}
            result={result} 
            selected={select} 
            index={i}  
            onClick={handleClick}
        />
    ))

    return (
        <div className="m-4 max-w-[720px] md:mx-auto">
            <div className="px-4 py-5 rounded-[2px] text-lg font-semibold bg-red-400 text-white">
                比賽成績查詢
            </div>
            <SearchBar inputWord={word}
                placeholder='請輸入關鍵字'
                onChange={(e) => setWord(e.target.value)}
            />
            <div className="">
                {resultsList}
            </div>
        </div>
    )
}