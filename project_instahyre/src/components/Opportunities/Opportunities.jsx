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

    const [show, setShow] = useState(false);

    const open = ()=>{

        setShow(prev => !prev);
    }

    const [jobs,setJobs] = useState('');

    if(!jobs){
        axios.get('http://localhost:3001/jobs').then(res => {console.log(res,'res');setJobs(res.data)} )
    }

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

            ) 
        })
    }
    return <h1>Fetching...</h1>
}

export default Opportunities
