import aboutImgs from "../data/aboutImgs"

export default function About() {
    const imgsList = aboutImgs.map((img, i) => (
        <div key={i}>
            <img alt={img.name} src={img.url} />
        </div>
    ))

    return (
        <div className="max-w-[730px] m-auto">
            { imgsList }
        </div>
    )
}