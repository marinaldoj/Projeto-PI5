import React from 'react'

import Logo from '../../assests/Logo.png'
import { 
    Container,
    ContainerDevs,
    ContainerWelcome,
    ContainerLogo,
    ContainerDescription,
} from './styles';

export default function Dashboard(){

    
    return(
        <Container>
            <ContainerWelcome>
                <ContainerLogo>
                    <img src={Logo} />
                </ContainerLogo>
                <ContainerDescription>
                    BOOKFLIX é uma biblioteca gratuita que não gera fundos nem frentes,
                    projeto é apenas ultilizado com intuito de ganhar pontos e passar
                    ná avaliação do projeto, por que se não... acho que nem existiria,
                    desde já estamos muito gratos em fazer o projeto.
                </ContainerDescription>
            </ContainerWelcome>
            <ContainerDevs>dsfdsf</ContainerDevs>
        </Container>
    )
}