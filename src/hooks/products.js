import { useLayoutEffect, useState } from "react"


const useProducts = (URL) => {
    const [isLoading, setLoading] = useState(true)
    const [newsId, setNewsId] = useState([])

    const [reloaderPage, setReloaderPage] = useState(true)

    useLayoutEffect(() => {

        setInterval(() => setReloaderPage(prev => !prev), 60000) //Reload page

        setLoading(true)
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setNewsId((_) => json)
            })
            .then((_) => setLoading(false))
    }, [URL, reloaderPage])

    return [
        newsId, isLoading
    ]
}

export default useProducts