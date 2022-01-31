import { MdSend } from 'react-icons/md'
import { NewletterContainer,  
    NewletterTitle, NewletterDesc, 
    NewletterInputContainer, NewletterInput, 
    NewletterButton, } from './newletter.style'
const Newletter = () => {
    return(
        < NewletterContainer>
            <NewletterTitle>Newsletter</NewletterTitle>
            <NewletterDesc> Get timely updates from your favourite products</NewletterDesc>
            <NewletterInputContainer>
                    <NewletterInput  placeholder='your email'/>
                    <NewletterButton>
                        <MdSend  size='25' color='white'/>
                    </NewletterButton>
            </NewletterInputContainer>
        </NewletterContainer>
    )
}

export default Newletter