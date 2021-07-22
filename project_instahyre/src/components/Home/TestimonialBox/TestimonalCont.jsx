
import styled from 'styled-components'


const Comments = styled.div`


  * {
    margin: 0%;
  }
  q{
      line-height:20px;
  }


  section {
      text-align: center;
    width: 90%;
    display: flex;
    height: 140px;
    align-items: center;
    background-color: rgb(244, 243, 236);
    border-radius: 5px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 90%,
      52% 90%,
      45% 100%,
      43% 90%,
      0% 90%
    );
  }
`;

const Div = styled.div`

  display: grid;


  
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2,345px);
    justify-content:center;

}



`

export default  function TestimonialCont(){

    return (

        <Div>
<Comments>
          <div>
            <section>
              <q>
                Instahyre really stands out from a typical job site by showing
                relevant positions at top companies!
              </q>
            </section>
          </div>
          <div>
            <div>
              <p>Deepak Kumar</p>
              <span>Hired at Amazon</span>
            </div>
          </div>
         
        </Comments>

        <Comments>
          <div>
            <section>
              <q>
                Instahyre really stands out from a typical job site by showing
                relevant positions at top companies!
              </q>
            </section>
          </div>
          <div>
            <div>
              <p>Deepak Kumar</p>
              <span>Hired at Amazon</span>
            </div>
          </div>
         
        </Comments>

           </Div>
    )

}