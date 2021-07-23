import Candidatenav from "./Navcandidate/Candidatenav";

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
       return <Candidatenav/>
   }
   else{
       return <button onClick={handleForm}>signed up</button>
   }
}

export default Navcandidate
