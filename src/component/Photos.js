
export default function Photos() {
    const imgs = [
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
        'https://m51.puiching.edu.mo/imgs/sports_pic/day1m/small/DSC_4244.JPG',
    ]
    const imgsList = imgs.map((img, i) => (
        <div key={i} className="">
            <img alt="" src={img} />
        </div>
    ))
    return (
        <div className="p-4">
            <div className="mt-4 px-4 py-2 bg-red-400 text-white">
                校運圖片查詢
            </div>
            <input className="border px-4 py-2 focus:outline-none rounded-b-lg w-full bg-slate-100" placeholder="請輸入運動員編號" />
            <div className="text-xs text-gray-400">
                若果您想查詢的運動員編號為 1234 ，可輸入 123 或 234 或 1234
            </div>
            <div className="border-t my-7" />
            <div className="grid grid-cols-2 gap-4">
                {imgsList}
            </div>
        </div>
    )
}