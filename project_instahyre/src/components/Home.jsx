import React from 'react'
import CompanyDisplay from './Home/CompanyDisplay'
import Index from './Home/Index'
import Info from './Home/Info'
import TestimonialCont from './Home/TestimonialBox/TestimonalCont'
import Footer from './Footer/Footer'


const Home = () => {
    return (
        <div>
         <Index/>
         <CompanyDisplay/>
         <hr/>
         <Info/>

         <hr style = {{color: 'lightgray', height:"3px"}}/>

         <TestimonialCont/>


         <Footer/>
        </div>
    )
}

export default Home
