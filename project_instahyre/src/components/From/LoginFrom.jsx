import React,{useState} from "react";
import styled from "styled-components";

export default function LoginFrom(){

    const [fresher, setFresher] = useState(false);
    const [pro, setProf ] = useState(true);
    const [addSkill , setAddSkill] = useState(false);
    const [data, setData] = useState({
        
    })

    const handleToggle = (e)=>{
       
        setFresher(true)
        setProf(false);
    }
    const handleTogglepro = ()=>{
        setFresher(false)
        setProf(true);


    }
    

    return(
        <div>
            <h1>Add your skills</h1>

            <hr/>

            <div>
                <p>Are you a working professional or fresher?</p>
                <input checked= {pro} type="radio" onChange = {handleTogglepro}/> <p> I am a working professional</p>

                <input checked = {fresher} type="radio" onChange = {handleToggle}/> <p>I am a fresher</p>
            </div>

            <div>

            {fresher? <div>
                <p>Select your preferred role</p>

                <select>
                    <option value=""> full stack web developer</option>
                    <option value=""> full stack web developer</option>

                </select>
            </div>:<div>
                
                <div>
                    How many years of work experience do you have? don't include interships.
                    <div>
                    <input type = 'text' palceholder = 'e.g 3'/>
                   <button>Years</button>

                    </div>
                </div>

                <div>
                    <p>Select your current role :</p>
                    <select >
                    <option value=""> full stack web developer</option>
                    <option value=""> full stack web developer</option>
                    </select>
                </div>
               
               

                </div>}


                </div> 
                {/* for the freshers */}

                    {/* input for the skills  */}

                    <div>

                        <p>Add up to 10 skills and how much expertise you have with each </p>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        {
                            addSkill? <div>
                                <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                        <input type="text" placeholder="e.g java"/>
                            </div>: <p onClick = {()=> setAddSkill(true)}>+ Add More</p>
                        }
                    </div>


                    {/* location 

                    for freshers
                    1. cureently located
                    2.where are you op to working
                    what is the minumn salary you will consider when
                    when can you join the compnay if slected*/}

                    <div>

                    {/* locattion */}
                    <div>
                        <p>Where are you currently located?</p>
                        <select>
                            <option value="">hyd</option>
                            <option value="">hyd</option>
                            <option value="">hyd</option>
                            <option value="">hyd</option>
                        </select>
                    </div>

                  <div>
                      <p>whare are you open to working?</p>

                      <select>
                          <option value="">wfh</option>
                          <option value="">wfh</option>
                      </select>
                  </div>

                  <div> What is you current annual salary?
                  <input type="text"  palceholder = 'Enter the value'/>

                  </div>

                  <div>What is your notice period?
                      <slected>
                          <option value = "">immediatley</option>
                      </slected>
                  </div>
                  

                    </div>



            
        </div>
    )
}