import React, { useState } from 'react'
import axios from 'axios'
import styles from "../Opportunities/Opportunity.module.css"


const OpportunityViews = ({show}) => {
    const [jobs, setJobs] = useState('');

    if (!jobs) {
        axios.get('http://localhost:3001/jobs').then(res => { console.log(res, 'res'); setJobs(res.data) })
    }

    if (jobs) {
        return jobs.map((el,i) => {
            var { responsibilities,skills, about, location, Function} = el
            return (

                
                <div className={styles.oppview__box}>
                    <div className={styles.oppview__box2}>
                        <div>
                            <img className={styles.opp__logo} src={el.logo} alt="" />
                        </div>
                        <div>
                            <h2 className={styles.opp__role}> {el.role} </h2>
                            <p className={styles.location}> {el.company} </p>
                            <p className={styles.location}> {el.location} </p>
                        </div>
                    </div>
                    <div>
                        <h1 className={styles.oppview__descriptions}> JOB DESCRIPTION </h1>
                        <p> <span className={styles.oppview__head} > {skills}  </span> </p>
                        <p> <span className={styles.oppview__head}> Location :  {location} </span></p>
                        <p> <span className={styles.oppview__head}> Function : {Function} </span></p>
                        
                            <h4 className={styles.oppview__descriptions}>Responsiblity</h4>
                        <ul className={styles.opp__ul}>    
                            <li>{responsibilities[0]}</li>
                            <li>{responsibilities[1]}</li>
                            <li>{responsibilities[2]}</li>
                        </ul>

                        <h1 className={styles.oppview__descriptions}> ABOUT </h1>
                        <p> <span className={styles.oppview__head}> {about} </span> </p>
                    </div>
                    <div className={styles.opp__productphotos}> 
                           <h1 className={styles.oppview__descriptions}> Infozzle Office and Product Photos </h1>
                           <div className={styles.oppview__images}> 
                                <div>
                                    <img className={styles.opp__logo} src={el.logo} alt=""/>
                                </div>
                                <div>
                                    <img className={styles.opp__logo} src={el.logo} alt=""/>
                                </div>
                           </div>
                    </div>
                </div>
               

            )
        })
    }
    return <h1>Fetching...</h1>

}

export default OpportunityViews
