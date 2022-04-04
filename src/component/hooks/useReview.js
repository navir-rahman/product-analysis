import { useEffect, useState } from "react"

const useReview=()=>{
    const [reviews, setreview] = useState([]);
    useEffect(()=>{
        fetch('userRivew.json')
            .then(res=>res.json())
            .then(data=>setreview(data))
    }, [])

    return [ reviews, setreview]

}

export default useReview;