import {useState} from 'react'

import {Container,Heading,Count,ButtonContainer,Button} from './styledComponents'

const Counter =()=>{
    const [count,setCount]=useState(0)
    const onIncrease=()=>(
        setCount(prevState=>prevState+1)
    )

    const onDecrease=()=>(
        setCount(prevState=>prevState-1)
    )
    

    return(
        <Container>
            <Heading>Counter</Heading>
            <Count>{count}</Count>
            <ButtonContainer>
                <Button onClick={onIncrease} type="button">Increase</Button>
                <Button onClick={onDecrease} type="button">Decrease</Button>
            </ButtonContainer>
        </Container>
        
    )
}

export default Counter