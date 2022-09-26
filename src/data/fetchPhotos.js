export default function fetchPhotos() {
    let url = 'https://m52.puiching.edu.mo/cgi-bin/read_photos.py'
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