
import { Container, First, Second, Third, Logo, Desc, Social, SocialContainer, Title, List, Listitem, Contactitem, Payment } from './footer.style'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterestSquare, FaMap, FaPhoneAlt,FaEnvelope } from 'react-icons/fa'
const Footer =  () => {
    return(
        <Container>
            <First>
                <Logo>Shopy.</Logo>
                <Desc>there are many variation of passages of lorem ipsum available, but
                    the majority have suffered alteration in some from, by injected humour, or randomised
                    words which don't look even slightly believe.
                </Desc>
                <SocialContainer>
                <Social  color='blue'>
                    <FaFacebookSquare  color='white' size='25'/>
                </Social>
                <Social  color='coral'>
                    <FaInstagram color='white' size='25' />
                </Social>
                <Social  color='skyblue'>
                    <FaTwitter color='white' size='25' />
                </Social>
                 <Social  color='red'>
                       <FaPinterestSquare  color='white' size='25'/>
                 </Social>
                </SocialContainer>
            </First>
            <Second>
                <Title>Useful Links</Title>
                <List>
                   <Listitem>home</Listitem> 
                   <Listitem>cart</Listitem> 
                   <Listitem>Man Fashion</Listitem> 
                   <Listitem>woman Fashion</Listitem> 
                   <Listitem>accessories</Listitem> 
                   <Listitem>my account</Listitem> 
                   <Listitem>order Tracking</Listitem> 
                   <Listitem>wishlist</Listitem> 
                   <Listitem>Terms</Listitem> 
                </List>
            </Second>
            <Third>
                <Title>contact</Title>
                <Contactitem>
                   <FaMap  size='25'/> 622 Dixie Path , Soutj Tobinchester 98336
                </Contactitem>
                <Contactitem>
                 <FaPhoneAlt size='25' />   + 622 98 33 6
                </Contactitem>
                <Contactitem>
                    <FaEnvelope  size='25'/> Email: Shopy.admin@gmail.com
                </Contactitem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' alt='payment-image'/>
            </Third>
        </Container>
    )
}


export default Footer