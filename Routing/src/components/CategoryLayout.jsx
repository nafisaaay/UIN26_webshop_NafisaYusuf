import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//fragment <> </> rundt -- for å slippe error, dont know why tho 

export default function CategoryLayout(){
    return(
        <>
        <nav>
            <Link to="sko">Sko</Link>
            <Link to="bukse">Bukse</Link>
            <Link to="topp">Topp</Link>
            <Link to="kjole">Kjole</Link>
            <Link to="skjorte">Skjorte</Link>
        </nav>
        <Outlet />
        </>
    )
}