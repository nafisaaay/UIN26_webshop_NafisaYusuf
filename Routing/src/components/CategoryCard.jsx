import { useEffect, useState } from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"

export default function CategoryCard({name, url}){

    const {setApiEndPoint} = useOutletContext()
    
    const [apiData, setApiData] = useState({})

    const {slug} = useParams()

    const getData = async()=>{
        const response = await fetch(url)
        const data = await response.json()

        setApiData(data)
    }

    console.log("kommer fra CC",slug)

    useEffect(()=>{
        getData()
    }, [])

    return(
        <article>
            <h3>{name}</h3>
            <p>{apiData?.id}</p>
            {slug === "type" ? <img src={`../type_img/${apiData.name}.png`} />:
            <img src={apiData?.sprites?.front_default} alt={apiData?.name} />}
            <img src={apiData?.sprites?.front_shiny} />
            <ul>
                {apiData?.stats?.map((item) => <li key={apiData?.name + item?.stat?.name}>{item?.stat?.name} : {item?.base_stat}</li>)}
            </ul>
            <Link to={apiData?.name} onClick={()=>setApiEndPoint(url)}>Les mer om {apiData?.name}</Link>
        </article>
    )
}