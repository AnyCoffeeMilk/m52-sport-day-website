export default function fetchPhotos(number) {
    let url = `https://m52.puiching.edu.mo/cgi-bin/read_photos.py?no=${number}`
    return {
        fetchCurrent(callback) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    callback && callback(data)
                })
        }
    }
}