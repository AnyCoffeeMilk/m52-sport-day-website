export default function ZoomedImg({ imgId, onClick, imgs }) {
    const handleClass = () => {
        if (imgId !== undefined) {
            return "fixed left-0 z-20 top-0 w-screen h-screen grid justify-center items-center"
        } else {
            return "hidden"
        }
    }

    return (
        <div className={handleClass()}>
            <img alt="Zoomed" 
                className="z-10 object-contain w-[500px] max-h-[22rem]" 
                src={imgs[imgId]} 
            />
            <div onClick={() => onClick()}
                className="absolute backdrop-blur-3xl bg-black opacity-50 w-full h-full"
            />
        </div>
    )
}