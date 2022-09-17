import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ResultTable from "./ResultTable";
import AddIcon from '@mui/icons-material/Add';

export default function Result() {
    const [word, setWord] = useState('')
    const [select, setSelect] = useState()
    const results = [
        {
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '男子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },{
            name: '女子丁組跳遠決賽', content: [
                {
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },{
                    position: 1,
                    number: 7101,
                    name: '方喬',
                    result: '3.67m ^'
                },
            ]
        },
    ]
    let resultsList = results.filter((result) => {
        return result.name.includes(word)
    }).map((result, i) => (
        <div key={i} className="text-lg border-b py-4 px-2 mx-2">
            <div className="flex justify-between items-center py-4">
                <div>{ result.name }</div>
                <div className={
                        "text-3xl flex items-center cursor-pointer align-top origin-center transition-transform select-none " + (
                            select === i ? "rotate-45" : ""
                        )
                    }
                    onClick={() => {
                        if (select === i) {
                            setSelect()
                        } else {
                            setSelect(i)
                        }
                    }}
                ><AddIcon /></div>
            </div>
            { select === i ? <ResultTable content={result.content} /> : null }
        </div>
    ))

    return (
        <div className="p-4">
            <div className=" px-4 py-5 text-lg bg-red-400 text-white">
                比賽成績查詢
            </div>
            <div className="flex border my-4 px-3 py-2 rounded-lg w-full bg-slate-100">
                <SearchIcon className="mr-2 text-md" sx={{ color: "lightgray" }} />
                <input onChange={(e) => setWord(e.target.value)} value={word} className="flex-grow focus:outline-none bg-slate-100" placeholder="請輸入關鍵字" />
            </div>
            <div className="">
                { resultsList }
            </div>
        </div>
    )
}