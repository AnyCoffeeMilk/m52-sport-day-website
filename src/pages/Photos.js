import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ZoomedImg from "./components/ZoomedImg";

export default function Photos() {
    const [zoom, setZoom] = useState()
    const imgs = [
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4250.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4260.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4270.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4280.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4290.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4300.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4310.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4300.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4330.JPG',
    ]
    
    const imgsList = imgs.map((img, i) => (
        <div key={i} className="w-12/13 h-36 flex justify-center" onClick={() => setZoom(i)}>
            <img className="object-contain w-12/13 max-h-36" alt="TODO" src={img} />
        </div>
    ))

    return (
        <div className="p-4 max-w-[750px] md:m-auto">
            <ZoomedImg imgs={imgs}
                imgId={zoom}
                onClick={() => setZoom()}
            />
            <div className="px-4 py-5 mb-4 text-lg bg-red-400 text-white">
                校運圖片查詢
            </div>
            <div className="flex border px-3 py-2 rounded-lg w-full bg-slate-100">
                <SearchIcon className="mr-2 text-md" sx={{ color: "lightgray" }} />
                <input className="focus:outline-none rounded-lg w-full bg-slate-100" placeholder="請輸入運動員編號" />
            </div>
            <div className="text-xs text-gray-400 p-1">
                若果您想查詢的運動員編號為 1234 ，可輸入 123 或 234 或 1234。點擊圖片放大
            </div>
            <div className="border-t mt-3 mb-7" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {imgsList}
            </div>
        </div>
    )
}