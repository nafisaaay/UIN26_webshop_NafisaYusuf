import { Outlet } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//fragment <> </> rundt slik at det blir satt sammen i samme kontainer 

export default function CategoryLayout(){

  const {slug} = useParams()
    const [apiData, setApiData] = useState([])
    const [apiEndPoint, setApiEndPoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'

  //asynkrone funksjoner er funksjoner som ikke blir kjørt med engang, men heller venter til noe er utført før den kjører (asynkront) 

  
    const getData = async()=>{
        const response = await fetch(defaultApiUrl)
        //gjør om responsen til json format, uten dette ville man bare fått inn informasjon om api-et, og ikke inneholdet i api med tanke på at det er skrevet i json format 
        //await --> endret til at man får json pokemon-objektene 
        const data = await response.json()

        //heter ut det som ligger i api-et basert på nøkkelordene i api listen 
        const {type, pokemon, item} = data

        setApiData({type, pokemon, item})
   
  }

  console.log("sjekk",apiData)
  console.log("denne kommer fra category layout",apiEndPoint)

  useEffect(()=>{
    getData()
  }, [])

//lager en map for å hente ut objektene i listen. bruker item.name som man skal hente ut, og bruker navnet som key verdien i og med at den allrede er unik
//linken peker til item.name og det er item.name som er det som vises på nettsiden 
//hvis man får opp en error om at man ikke kan mappe ut noe som ikke fins, så kan man legge til et ? ..> som betyr at at derson det fins så skal det mappes ut. forhindrer error mld 

//Object.keys, heter ut nøkkelordene til et objekt og gjør det om til en array. brukes for å kunne få i bruk map 
    return(
        <>
        <nav className="main-nav">
          {Object.keys(apiData)?.map((item) => <Link key={item+'xqz'} to={item} onClick={()=>setApiEndPoint(defaultApiUrl + item)}>{item}</Link>)}
            {/*apiData?.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndPoint(item.url)}>{item.name}</Link>)/*/}
        </nav>
        <Outlet context={{apiEndPoint, defaultApiUrl, setApiEndPoint}} />
        </>
    )
    
    //outlet brukes får å vite at noe skal hentes ut fra en annen side 
}