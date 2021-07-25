
import React, { useState } from 'react'
import axios from 'axios'
import styles from "../Opportunities/Opportunity.module.css"
import styled from 'styled-components'
import Popup from './Popup'
import {GlobalStyle}  from '../../globalStyles'
import OpportunityViews from './OpportunityViews'


const Button = styled.button`
        background-color: #02BFA0;
    border: 0;
    border-bottom: 3px solid #029A82;
   
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: white;
    padding: 8px 12px;

    :hover{
        background-color: #19927A;
    border-color: #007358;
    cursor: pointer;
    }
`



const Opportunities = () => {
  const [jobs, setJobs] = useState("");
  const [interest,setInterest] = useState([])

  let l = localStorage.getItem("login");
    const [show, setShow] = useState(false);

    const open = ()=>{

        setShow(prev => !prev);
    }


  if (!jobs) {
    axios.get(`http://localhost:3001/skills/?userId=${l}`).then((res) => {
      axios
        .get(`http://localhost:3001/jobs/?role=${res.data[0].role}`)
        .then((res) => setJobs(res.data));
    });
  }

  const handleInterest = (x) => {
    setInterest([...interest,x.id]);
    if(jobs){
        return jobs.map((el) => {
            return(

                <div>
                     {/* on click it should pop up a div fiorm opiew */}
                    <GlobalStyle/>
                     <Popup show = {show} setShow = {setShow}>
                         <OpportunityViews jobs = {jobs}/>

                         </Popup>
                <div className={styles.opp__jobs}>
                     
                      
                    <div> 
                        <img className={styles.opp__logo} src={el.logo} alt=""/>
                    </div>
                    <div>
                       <h4 className={styles.opp__role}>{el.role}</h4> 
                        <p className={styles.opp__company}>{el.company}</p>
                        <p className={styles.opp__location}>{el.location}</p> 
                        <p className={styles.opp__description}>{el.description}</p> 
                     </div>
                     <div className={styles.opp__viewinterested}>
                        
                       <Button onClick = {open}> view on  </Button>
                       <p> not interested </p>

                       <div>
                      
                       
                       
                     
                          
                       </div>
                      </div>

                     
                </div>

                </div>

  }

  //  .then(res => console.log(res.data[0].role))
  if (jobs) {
    return jobs.map((el) => {
      return (
        <div className={styles.opp__jobs}>
          <div>
            <img className={styles.opp__logo} src={el.logo} alt="" />
          </div>
          <div>
            <h4 className={styles.opp__role}>{el.role}</h4>
            <p className={styles.opp__company}>{el.company}</p>
            <p className={styles.opp__location}>{el.location}</p>
            <p className={styles.opp__description}>{el.description}</p>
          </div>
          <div className={styles.opp__viewinterested}>
            <button> view on </button>
            <p onClick={() => handleInterest(el)}> not interested </p>
          </div>
        </div>
      );
    });
  }
  return <h1>Fetching...</h1>;
};

export default Opportunities;
