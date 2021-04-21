import React from 'react'

import { 
    Container,
    ContainerContent
} from './styled'

export default function Content({children}){
    return(
        <Container>
            <ContainerContent>
                {children}
            </ContainerContent>
        </Container>
    )
}