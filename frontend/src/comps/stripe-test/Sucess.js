import { SucessContainer, Content, Text, Btn, } from './stripe'
import { useLocation } from 'react-router-dom'
const Sucess = () => {
    const location = useLocation()
    console.log(location)
    return(
        <SucessContainer>
        <Content>
            <Text> Payment Sucessful</Text>
            <Btn>Sucess</Btn>
        </Content>
            </SucessContainer>
    )
}

export default Sucess