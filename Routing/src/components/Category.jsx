import { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function Category(){

    const {apiEndPoint, defaultApiUrl} = useOutletContext()

    const [apiData, setApiData] = useState([])
    const {slug} = useParams() 



//bruker navnverdien som vi bruker som id og bruker det som parameter i url
    const getSingleData = async()=>{
         const response = await fetch(apiEndPoint ? apiEndPoint : defaultApiUrl+slug)
         const data = await response.json()
         setApiData(data)
    }

    console.log('cat', apiData, apiEndPoint)


    useEffect(()=>{
        getSingleData()
    },[slug])
   
    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name}/>
            </section>
        </main>
    )
}