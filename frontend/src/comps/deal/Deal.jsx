import React from 'react';
import {DealContainer,DealWrapper, DealText, Text, Close, Small  } from './deal.style'
import { FaTimes} from 'react-icons/fa'
function Deal(props) {
  return <DealContainer>
      <DealWrapper>
          <DealText>
            <Text>Super Deal Free shipping on order over $50</Text>
          </DealText>
          <Close>
              <Small onClick={() => props.close(false)}><FaTimes /></Small>
          </Close>
      </DealWrapper>
  </DealContainer>;
}

export default Deal;
