import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//fragment <> </> rundt slik at det blir satt sammen i samme kontainer 

export default function CategoryLayout(){
    const [apiData, setApiData] = useState([])
    const [apiEndPoint, setApiEndPoint] = useState()

  //asynkrone funksjoner er funksjoner som ikke blir kjørt med engang, men heller venter til noe er utført før den kjører (asynkront) 

    const getData = async()=>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
        //gjør om responsen til json format, uten dette ville man bare fått inn informasjon om api-et, og ikke inneholdet i api med tanke på at det er skrevet i json format 
        //await --> endret til at man får json pokemon-objektene 
        const data = await response.json()
        setApiData(data.results)
   
  }
  
  console.log(apiData)
  console.log(apiEndPoint)

  useEffect(()=>{
    getData()
  }, [])

//lager en map for å hente ut objektene i listen. bruker item.name som man skal hente ut, og bruker navnet som key verdien i og med at den allrede er unik
//linken peker til item.name og det er item.name som er det som vises på nettsiden 
//hvis man får opp en error om at man ikke kan mappe ut noe som ikke fins, så kan man legge til et ? ..> som betyr at at derson det fins så skal det mappes ut. forhindrer error mld 
    return(
        <>
        <nav className="main-nav">
            {apiData?.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndPoint(item.url)}>{item.name}</Link>)}
        </nav>
        <Outlet />
        </>
    )
}