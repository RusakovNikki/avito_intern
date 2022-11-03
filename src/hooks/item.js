import { useLayoutEffect, useState } from "react"


const useItem = (id, updateComments) => {

    const URL_ITEM = `https://hacker-news.firebaseio.com/v0/item/${id}.json`

    const [isLoading, setLoading] = useState(true)
    const [newsId, setNewsId] = useState([])

    useLayoutEffect(() => {
        async function fetchData() {

            setLoading(true)
            await fetch(URL_ITEM)
                .then((res) => res.json())
                .then((json) => {
                    setNewsId((_) => json)
                })
                .then((_) => setLoading(false))
        }
        fetchData()
    }, [URL_ITEM, updateComments])

    return [
        newsId, isLoading
    ]
}

export default useItem