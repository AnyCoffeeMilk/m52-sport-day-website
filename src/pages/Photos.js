import { useEffect, useRef, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ZoomedImg from "./components/ZoomedImg";
import fetchPhotos from "../data/fetchPhotos";

export default function Photos() {
    const [imgs, setImgs] = useState([])
    const [zoom, setZoom] = useState()
    const [num, setNum] = useState('')

    const timerRef = useRef(null)

    useEffect(() => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            fetchPhotos(num).fetchCurrent((data) => {
                setImgs(data.img)
                clearTimeout(timerRef.current)
            })
        }, 1500)
    }, [num])
    
    const imgsList = imgs.map((img, i) => (
        <div key={i} className="w-12/13 h-36 flex justify-center" onClick={() => setZoom(i)}>
            <img className="object-contain w-12/13 max-h-36" alt="TODO" src={img} />
        </div>
    ))

    const handleImgsList = () => {
        if (imgsList == 0) {
            return (
                <div className="m-auto text-center text-bold text-gray-400">
                    沒有相關圖片
                </div>
            )
        } else {
            return (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {imgsList}
                </div>
            )
        }
    }

    return (
        <div className="p-4 max-w-[750px] md:m-auto">
            <ZoomedImg imgs={imgs}
                imgId={zoom}
                onClick={() => setZoom()}
            />
            <div className="px-4 py-5 rounded-[2px] mb-4 text-lg bg-red-400 text-white font-semibold">
                校運圖片查詢
            </div>
            <div className="flex border px-3 py-2 rounded-lg w-full bg-slate-100">
                <SearchIcon className="mr-2 text-md" sx={{ color: "lightgray" }} />
                <input value={num}
                    placeholder="請輸入運動員編號"
                    className="focus:outline-none w-full bg-slate-100"  
                    onChange={(e) => setNum(e.target.value)}
                />
            </div>
            <div className="text-xs text-gray-400 p-1">
                若果您想查詢的運動員編號為 1234 ，可輸入 123 或 234 或 1234。點擊圖片放大
            </div>
            <div className="border-t mt-3 mb-7" />
            {handleImgsList()}
        </div>
    )
}