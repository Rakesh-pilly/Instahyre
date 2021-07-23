import styled from 'styled-components'


const Div = styled.div`

        display:grid;
        justify-content:center;
        grid-template-columns:repeat(5,auto);
        grid-gap:7%;
        border-top:1px solid #cecccc;
        margin: 10px 0;
        padding:20px 0;
        

        >div{

        }
        ul{
           list-style-type: none; 
           margin:0;
           padding:0;
           font-size:14px;
           
        }
        h4{
            font-size:14px;
        }

        li{
            margin-top:10px;
            
        }
`

export default function Footer(){
    
    return (
        <Div>
        <div>
           
        <h4>Jobs by Location</h4>

            <ul> 
           
                <li>Jobs in Bangalore</li>
                <li>Jobs in Delhi/NCR</li>
                <li>Jobs in Hyderabad</li>
                <li>Jobs in Bangalore</li>
                <li>Jobs in Mumbai</li>
                
            </ul>
        
        </div>

        <div>
            <h4>Jobs by Function</h4>
            <ul>

                <li>Software Engineering Jobs</li>
                <li>Technical Management Jobs</li>
                <li> Marketing Jobs</li>
                <li> Sales Jobs</li>
                

            </ul>
        </div>

        <div>
            <h4> For Employers</h4>
            <ul>

                <li>Post Your Jobs</li>
                <li> Success Stories</li>
               

            </ul>
        </div>


        <div>
            <h4>Instahyre </h4>
            <ul>

                <li>About</li>
                <li> Privacy</li>
                <li>Terms</li>
                
            </ul>
        </div>


        <div>
            <h4>Connect </h4>
            <ul>

                <li>Help Center</li>
                <li>Blog</li>
              

            </ul>
        </div>


     
        
        </Div>
    )

}