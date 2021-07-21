
import React from 'react';
import IndexLogin from './IndexLogin';
import styled from 'styled-components'


export default function Index(){

    const Wrappper = styled.div`
    width:500px;
    height: 300px;
    border: 1px solid white;
    background-color: white;
    justify-content:center;
    box-shadow: 2px 2px 10px 1px #444;
    padding: 34px 40px 0;
    
    position: relative;

    h1{
        color: #40454A;

        font-weight: 400;
    margin-bottom: 20px;
    margin-top: 0;
    }

    a{
        color: #02BFA0;
        display: block;
    color: #02BFA0;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 14px;
    padding-left: 22px;
    text-decoration:none;
    }
    a:hover{
        text-decoration: underline;

    }
   
    p{
        font-size: 1.2rem;
    font-weight: 300;
    line-height: 30px;
    margin-bottom: 0;
    }
    .box{

        width: 200px;
        height: 40px;
        background-color: #EC8A52;
    border-color: #E2783B;
   
    position:absolute;
    bottom:0;
    left: 30%;
   
    justify-content: center;

    align-items:center;
    padding-bottom:5px;
   
  
    }
    .box a{
        text-align: center;
    color: white;
        font-size: 1.1rem;
        font-weight:400;
       
       
    }
    .box a:hover{
        text-decoration: underline;
    }
    
    `

   
    


    return (
        <>
        <IndexLogin>

            <Wrappper>
                <h1>Your Dream job. Now.</h1>

                <a href="http://">Or sign up using email »</a>

                <p>Showcase yourself to a curated list of top companies

Complete privacy and no spam</p>

        <div class = 'box'>
            <a href = 'https://'>Recuiter singup »</a>

        </div>
                
                 
                    
            
            </Wrappper>
         

           
            </IndexLogin>

        </>
        
    )

}