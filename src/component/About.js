
export default function About() {
    const imgs = [
        'https://m51.puiching.edu.mo/imgs/teacher_ricky.png',
        'https://m51.puiching.edu.mo/imgs/dino.png',
        'https://m51.puiching.edu.mo/imgs/mountains.png',
        'https://m51.puiching.edu.mo/imgs/red.png',
        'https://m51.puiching.edu.mo/imgs/cat.png',
    ]
    const imgsList = imgs.map((img, i) => (
        <div key={i}>
            <img alt="" src={img} />
        </div>
    ))
    return (
        <div className="grid md:gird-cols-4">
            { imgsList }
        </div>
    )
}