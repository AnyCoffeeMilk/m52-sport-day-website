import { useState } from "react"

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
    const handleClass = () => {
        if (zoom !== undefined) {
            return "absolute left-0 top-0 w-screen h-screen grid"
        } else {
            return "hidden"
        }
    }
    return (
        <div className="p-4">
            <div className={handleClass()}>
                <img alt="Zoomed" className="z-10 object-contain w-full max-h-[22rem] m-auto" src={imgs[zoom]} />
                <div onClick={() => setZoom()}
                    className="absolute bg-black opacity-50 w-full h-full"
                />
            </div>
            <div className="mt-4 px-4 py-2 bg-red-400 text-white">
                校運圖片查詢
            </div>
            <input className="border px-4 py-2 focus:outline-none rounded-b-lg w-full bg-slate-100" placeholder="請輸入運動員編號" />
            <div className="text-xs text-gray-400">
                若果您想查詢的運動員編號為 1234 ，可輸入 123 或 234 或 1234。點擊圖片放大
            </div>
            <div className="border-t my-7" />
            <div className="grid grid-cols-2 gap-4">
                {imgsList}
            </div>
        </div>
    )
}