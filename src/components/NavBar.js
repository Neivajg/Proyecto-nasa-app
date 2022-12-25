import { Outlet , Link} from "react-router-dom";
import nav from "../csscomponents/nav.css"


export default function NavBar() {

  return (
    <>
        <ul>
          <li> <Link to={`/`}>Home</Link></li>
          <li> <Link  to={`/landing`}> Landing</Link></li>
          <li> <Link  to={`/neas`}> Neas</Link></li>
        </ul>
    </> 
    );
}
