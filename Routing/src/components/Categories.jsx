import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams, useOutletContext} from "react-router-dom"
import CategoryCard from "./CategoryCard"
export default function Categories(){

    const {slug} = useParams()
    const {apiEndPoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState()

    const getData = async()=>{
        const response = await fetch(apiEndPoint ? apiEndPoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data.results)
    }

    console.log("denne kommer fra categories",apiData)

    useEffect(()=>{
        getData()
    }, [slug])

    return (
    <main>
        <h1>{slug}</h1> 
        {apiData?.map((item) =><CategoryCard key={item.name + 'xt'} name={item.name} url={item.url}/>)}
    </main>
)
}