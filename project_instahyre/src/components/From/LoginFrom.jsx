import React,{useState} from "react";
import styled from "styled-components";

const Div = styled.div`
    min-width:450px;
    max-width:45%;
    margin: 15px auto;
    padding: 0.1% 3%;
    background-color:#fff;
    color: #40454A;
    h3{
       
    font-weight: 500;
    text-align:center;
    font-size:23px;
    }
    p{
        color: #555A61;
    font-weight: 500;
    margin-bottom:10px;
    }
    >div{
        margin-bottom: 30px;
    }  
    select{
        height: 40px;
        
        padding: 8px 12px;
        margin: 0;
        border:1px solid #555a61a8;
        border-radius:5px;
        padding-right: 20px;
    }
    input{
        height: 20px;
        
        padding: 8px 12px;
        margin: 0;
        border:1px solid #555a61a8;
        border-radius:5px;
        margin-right: 20px;
        margin-bottom: 5px;
       
    }
    h6{
        margin:0;
        border:1px solid #585c63d7;
        font-size:14px;
        height: 24px;
        margin-left:-20px;
        border-radius:5px;
        padding:6px 10px;
        align-items:center;
        color:#585c63d8;
        background-color:#ededed;
    }
    button{
        font-size: 15px;
        width: 125px;
        margin: 0 auto;
        background-color: #0090CC;
    border: 0;
    border-bottom: 3px solid #026f9c;
   
    display: block;
    color: #fff;
    padding: 13px 0;
    border-radius:5px;
    margin-top: 20px;
    
    }
`

const Flex = styled.div`
    display:flex;
    
`
const More = styled.h5`
    color:  #0090CC;
    font-size:16px;
    margin:0;
    margin-top:10px;
`



export default function LoginFrom(){

    const [fresher, setFresher] = useState(false);
    const [pro, setProf ] = useState(true);
    // const [addSkill , setAddSkill] = useState(false);
    const [addMore, setAddmore] = useState(false);
    const [data, setData] = useState({})

    const handleToggle = (e)=>{
       
        setFresher(true)
        setProf(false);
    }
    const handleTogglepro = ()=>{
        setFresher(false)
        setProf(true);


    }
    

    const handelChange = e => {
       
      

        const {name,value,checked} = e.target;

        setData({...data, [name]: value === 'checked'? checked: value})
        
    }
     const Submit = ()=>{
         setData({...data,pro,fresher})
         console.log(data);
     }

    return(
        <Div>
            <h3>Add your skills</h3>

            <hr/>

            <div>
                <p>Are you a working professional or fresher?</p>
                <input name = 'pro' checked= {pro} type="radio" onChange = {handleTogglepro}/> <label> I am a working professional</label>
        <br/>
                <input name = 'fresher'checked = {fresher} type="radio" onChange = {handleToggle}/> <label>I am a fresher</label>
            </div>


            
                {/* for the year of experience */}

            {pro? <div>
                <p>How may year of work experience do you have? Don't include interships</p>
                <div>
                    <Flex>
                    <input name = 'experience' placeholder = 'e.g 3' value = {data.experience} type = "text" onChange = {handelChange}/>
               <h6>Years</h6>
                    </Flex>
               
                </div>
                

            </div>:null}

                {/* for the current role:  */}

                <div>
                    {pro? 
                        <p>Select your current role:</p>
                    :
                        <p>Select yopur preferred role:</p>
                        }

                    <select name = 'role' onChange = {handelChange} value = {data.role}>
                        <option  value = 'BackendDevelopment'>BackendDevelopment</option>
                        <option  value = 'BigData'>Big Data</option>
                        <option  value = 'FrontendDevelopment'>frontend Development</option>
                        <option  value = 'FrontendDevelopment'>frontend Development</option>
                        <option value = 'Full-StackDevelopment'>Full Stack Development</option>
                        <option value = 'MobileDevelopment'>Mobile Development</option>
                    </select>
                </div>


                <div>
                    {/* skills */}
                    <p> Add up to 10 skills and how much expertise you have with each. </p>

                    <div>
                        <input type="text" name = 'skills1' value = {data.skills1} placeholder = 'e.g. Javas'/>

                        <select >
                            <option value>Level</option>
                            <option value>Beginner</option>
                            <option value>Intermediate</option>
                            <option value>Expert</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name = 'skills2' value = {data.skills2} placeholder = 'e.g. Javas'/>

                        <select >
                            <option value>Level</option>
                            <option value>Beginner</option>
                            <option value>Intermediate</option>
                            <option value>Expert</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name = 'skills3' value = {data.skills3} placeholder = 'e.g. Javas'/>

                        <select >
                            <option value>Level</option>
                            <option value>Beginner</option>
                            <option value>Intermediate</option>
                            <option value>Expert</option>
                        </select>
                    </div>

                    <div>
                        {addMore? <div>
                            <div>
                        <input type="text" name = 'skills3' value = {data.skills3} placeholder = 'e.g. Javas'/>

                        <select >
                            <option value>Level</option>
                            <option value>Beginner</option>
                            <option value>Intermediate</option>
                            <option value>Expert</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name = 'skills3' value = {data.skills3} placeholder = 'e.g. Javas'/>

                        <select >
                            <option value>Level</option>
                            <option value>Beginner</option>
                            <option value>Intermediate</option>
                            <option value>Expert</option>
                        </select>
                    </div>

                        </div>:<More onClick = {()=> setAddmore(true)}> + Add More</More>}
                    </div>
                  
                    
                </div>


                <div>
                    <p>Where are you currenty located?</p>

                    <select value = {data.located} onChange ={handelChange} name = 'located' >

                        <option value ='Bangalore '> Bangalore </option>
                        <option value = 'Hyderabad'> Hyderabad</option>
                        <option value = 'Chennai'> Chennai </option>
                        <option value = 'Mumbai'>Mumbai </option>
                        <option value = 'Delhi'>Delhi </option>
                        <option value = 'Pune'>Pune</option>
                        <option value = 'Kolkata'> Kolkata</option>
                        <option value = 'Ahmedabad'> Ahmedabad </option>
                        <option value = 'Gurgaon'> Gurgaon</option>
                   

                    </select>
                </div>

               <div>
                   <p>Where are you open to working?</p>

                   <select name="workform" onChange={handelChange} value = {data.workform}>
                       <option value="WorkFromHome">Work From Home</option>
                       <option value="AnywhereInIndia">Anywhere in India</option>
                       <option value="AnywhereOutsideIndia">Anywhere outside India</option>

                   </select>


               </div>

               <div> 
                   {pro? <p>What is your current annual salary? Don't specify offer in hand here.</p>:<p>What is the minimum salary you will consider?</p>}
              
                            <Flex>
                                
                                <input onChange={handelChange} type="text" value = {data.salary} name = 'salary' placeholder = "0"/>
                                <h6>LPA</h6>
                            </Flex>
              
               </div>

               <div>
                   {pro? <p>What is your notice period?</p>: <p>When can you join the company if selected? </p>}

                   <select name="notice"value = {data.notice} onChange={handelChange}>
                       <option value = 'Immediately'>Immediately</option>
                       <option value = '15Days'>15 Days</option>
                       <option value = '1month'>1 month</option>
                       <option value = '2month'>2 month</option>
                       <option value = '3month'>3+ month</option>
                      
                   </select>
               </div>
               

               {pro? <div>

                   <div>
                       <p>What is your current job title and company?</p>
                       <input onChange={handelChange} type="text" name = 'currentTitle' value = {data.currentTitle} placeholder = 'e.g. software Engineer' />
                       <input onChange={handelChange} type="text" name = 'company' value = {data.company} placeholder = 'e.g. Amazon'/>
                   </div>

                <div>
                    <p>Which companies have you previously worked at?</p>

                    <input onChange={handelChange} type="text" name = 'preCompany' value = {data.preCompany} placeholder = 'e.g. Google,Facebook'/>
                </div>


               </div>:null}


               <div>
                   <p>Sometimes companies hire for diversity. What's your gender?</p>

                  <select name="gender" value={data.gender} onChange={handelChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                  </select>
               </div>




            <hr/>


            <div>
                <button onClick = {Submit}>Get Hired</button>
            </div>

       


            
        </Div>
    )
}