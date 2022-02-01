import React from 'react';
import style from  'styled-components'
import { Deal, Header,  Newletter, Footer, Singlepage} from '../one'

const SingleContainer = style.div``
function Single() {
  return(
      <SingleContainer>
          <Header />
          <Deal />
          <Singlepage />
          <Newletter />
          <Footer />
      </SingleContainer>
  )
}

export default Single;
