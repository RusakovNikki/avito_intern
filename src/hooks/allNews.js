import { useLayoutEffect, useState } from "react"


const useAllNews = (isRedyLoading = false, reload = false) => {

    const URL = `https://hacker-news.firebaseio.com/v0/newstories.json`

    const [isLoading, setLoading] = useState(true)
    const [newsId, setNewsId] = useState([])

    const [reloaderPage, setReloaderPage] = useState(true)

    useLayoutEffect(() => {
        async function fetchData() {
            if (isRedyLoading) {
                setInterval(() => setReloaderPage(prev => !prev), 60000) //Reload page
            }

            setLoading(true)
            await fetch(URL)
                .then((res) => res.json())
                .then((json) => {
                    setNewsId((_) => json)
                })
                .then((_) => setLoading(false))
        }
        fetchData()
    }, [URL, reloaderPage, reload])

    return [
        newsId, isLoading
    ]
}

export default useAllNews