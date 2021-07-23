import Candidatenav from "./Navcandidate/Candidatenav";
import LoginFrom from "./From/LoginFrom";

const Navcandidate = ({token}) => {
    console.log(token)

    const handleForm = () => {
        let x = localStorage.getItem('signup');
        token[0](x);
        token[1](localStorage.getItem('login'));
        localStorage.setItem('login',x);
        localStorage.removeItem('signup');

    }
   if(token==='login'){
       return <Candidatenav />
   }
   else{
       return <LoginFrom prop={handleForm}/>
   }
}

export default Navcandidate
