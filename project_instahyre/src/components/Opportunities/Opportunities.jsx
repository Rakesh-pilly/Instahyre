import React, { useState } from 'react'
import axios from 'axios'

const Opportunities = () => {

    const [jobs,setJobs] = useState('');

    if(!jobs){
        axios.get('http://localhost:3001/jobs').then(res => {console.log(res,'res');setJobs(res.data)} )
    }

    if(jobs){
        return jobs.map(el => {
            return <div>{el.role}</div>
        })
    }
    return <h1>Fetching...</h1>
}

export default Opportunities
