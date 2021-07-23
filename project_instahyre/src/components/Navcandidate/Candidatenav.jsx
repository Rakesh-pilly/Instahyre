
import { Route, Link, Switch, withRouter} from "react-router-dom";
import Opportunities from "../Opportunities/Opportunities";
import Jobdetail from "../Opportunities/Jobdetail";

const Candidatenav = withRouter(({history}) => {
    const handleSignout = (e) => {
        localStorage.setItem('login','');
        history.push('/login')
     window.location.reload()
    }

    return (
        <div>
             
                
             <ul>
      <li>
        <Link to="/candidate/Opportunities">Instahyre</Link>
      </li>
      <li>
        <Link to="/candidate/job">Opportunities</Link>
      </li>
      <li>
        <button onClick={e => handleSignout(e)}>SignOut</button>
      </li>
    </ul>
    
    <Switch>
    
              <Route exact path='/candidate/Opportunities' component={Opportunities} ></Route>
              
              <Route exact path='/candidate/job' component={Jobdetail} ></Route>
            </Switch>
            
        </div>
    )
})

export default Candidatenav
