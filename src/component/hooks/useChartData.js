import { useEffect, useState } from "react";

const useChartData= () =>{
    const [chartInfo, setChartInfo] = useState([]);
    useEffect(()=>{
        fetch('data.json')
            .then(res=>res.json())
            .then(data=> setChartInfo(data))
    }, [])

    return [ chartInfo, setChartInfo]
}

export default useChartData;