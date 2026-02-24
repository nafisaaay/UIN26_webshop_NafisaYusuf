import { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function Category(){

    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])

    const spritesImg = apiData?.sprites
    ? Object.keys(apiData.sprites)
    : [];

    const { slug,cat } = useParams()
    
    console.log("Denne kommer fra Category", apiEndpoint)

//bruker navnverdien som vi bruker som id og bruker det som parameter i url
      const getSingleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug+"/"+cat)
        const data = await response.json()
        setApiData(data)
    }



      useEffect(()=>{
        getSingleData()
    },[cat, apiEndpoint])
   
    console.log("mine bilder",spritesImg)

    return (
        <main>
             <h1>{apiData?.name}</h1>
             <section>
                <h2>Bilder</h2>
                {spritesImg?.map((item) => (
                    apiData?.sprites?.[item] ?
                     <img key={item} src={apiData?.sprites?.[item]} alt={apiData?.name} />
                       : null
                       ))}
             </section>
        </main>
       
    )
}