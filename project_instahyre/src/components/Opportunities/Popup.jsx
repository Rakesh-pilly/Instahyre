import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

import React, { useRef, useEffect, useCallback } from 'react';


export default function Popup({show,setShow, children}){

    const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index:10000;
  
`;

const ModalWrapper = styled.div`
  width: 65vw;
  height: 80vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 20px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

    return (
        <>

        {show?(
            <Background>

                <ModalWrapper show = {show}>

                  {children}
                    
                    

            <CloseModalButton  aria-label = 'close modal' onClick = {() => setShow(prev => !prev)} />
                </ModalWrapper>


            </Background>
        ) : null }
        
        </>
    )

}