import React, { useState } from "react";
import axios from "axios";
import styles from "../Opportunities/Opportunity.module.css";
const Opportunities = () => {
  const [jobs, setJobs] = useState("");
  const [interest,setInterest] = useState([])

  let l = localStorage.getItem("login");

  if (!jobs) {
    axios.get(`http://localhost:3001/skills/?userId=${l}`).then((res) => {
      axios
        .get(`http://localhost:3001/jobs/?role=${res.data[0].role}`)
        .then((res) => setJobs(res.data));
    });
  }

  const handleInterest = (x) => {
    setInterest([...interest,x.id]);

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
