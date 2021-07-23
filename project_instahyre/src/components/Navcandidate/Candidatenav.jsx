
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Candidatenav = () => {

    const handleSignout = () => {
        localStorage.removeItem('login');
        window.location.reload();
    }

    return (
        <div>
             <ul>
      <li>
        <Link to="/candidate/Opportunities">Instahyre</Link>
      </li>
      <li>
        <Link to="/candidate/Opportunities">Opportunities</Link>
      </li>
      <li>
        <button onClick={handleSignout}>SignOut</button>
      </li>
    </ul>
    <Switch>
              <Route exact path='/candidate/Opportunities' ></Route>
              
              <Route exact path='/candidate/Opportunities' ></Route>
            </Switch>
        </div>
    )
}

export default Candidatenav
