import { useLayoutEffect, useState } from "react"


const useProducts = (URL) => {
    const [isLoading, setLoading] = useState(true)
    const [newsId, setNewsId] = useState([])

    useLayoutEffect(() => {
        setLoading(true)
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setNewsId((_) => json)
            })
            .then((_) => setLoading(false))
    }, [URL])

    return [
        newsId, isLoading
    ]
}

export default useProducts