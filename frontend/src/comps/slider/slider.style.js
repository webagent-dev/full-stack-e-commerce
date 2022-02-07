import styled from 'styled-components'

export const SliderContainer= styled.div`
 width: 100vw;
 height: 100%;
position: relative;
     overflow: hidden;
     display: flex;
   align-items: center;
   justify-content: center;

                      @media(max-width: 760px){
                         width: auto;
                height:  70vh;
    }
                 @media(max-width: 620px){
                      height: 50vh;
    }
`
export const SliderMainWrapper = styled.div`
        width: 100vw;
        display: flex;
      transform: translateX(${props => props.index * -100}vw);
        transition:all 1.5s ease-in-out;
`
 export const Arrow = styled.div`
    width: 50px;
    height: 50px;
     background: white;
    padding: 10px;
    border-radius: 50%;
        position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    left: ${props => props.direction === 'left' && '15px'};
    right: ${props => props.direction === 'right' && '20px'};
    margin: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;align-items: center;
    &:hover{
          background: gray;
        color: white;
    }

             @media(max-width: 760px){
                    left: ${props => props.direction === 'left' && '8px'};
    right: ${props => props.direction === 'right' && '8px'};
        width: 40px;
    height: 40px;
    padding: 8px;
    }
                 @media(max-width: 620px){
                                    left: ${props => props.direction === 'left' && '3px'};
    right: ${props => props.direction === 'right' && '3px'};
       width: 30px;
    height: 30px;
    padding: 5px;
    }
 `
 export const SliderWrapper= styled.div`
   min-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: ${props => props.bg}
     `
 export const SliderImage= styled.div`
 width: 100%;
  flex: 1;

                   @media(max-width: 760px){
                     flex: 2;
    }
  `
  export const Image= styled.img`
        width: 80%;
    object-fit: contain;
       transition:all 5s cubic-bezier(1, 0, 0, 1);

                       @media(max-width: 620px){
                        width: 100%;
                        height: 100%;
    }
  `
  export const SliderText= styled.div`
     flex: 1;
     width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${props => props.text};
       transition:all 5s cubic-bezier(1, 0, 0, 1);

                              @media(max-width: 620px){
                     
    }
  `
  export const Title= styled.h1`
        font-weight: 700;
    font-size: 4.5rem;
       transition:all 5s cubic-bezier(1, 0, 0, 1);

                 @media(max-width: 760px){
                    font-size:  2rem;
    }
                 @media(max-width: 620px){
                    font-size: 1rem;
    }
  `
export const Desc= styled.p`
        font-size: 1rem;
    font-weight: 500;
    max-width: 500px;
       transition:all 5s cubic-bezier(1, 0, 0, 1);

                        @media(max-width: 620px){
                    font-size: .7rem;
                    font-weight: 700;
    }
`
 export const Button= styled.button`
    width: 140px;
    padding: 10px;
    border: none;
    outline: none;
    text-align: text-center;
    border-radius: 5px;
    background: transparent;
    border: 1px solid gray;
    text-transform: uppercase;   
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    gap: 1rem;

                     @media(max-width: 760px){
                   width: 100px;
                   font-size: 12px!important;
    }
                 @media(max-width: 620px){
                font-size: 8px!important;
    }
 `
