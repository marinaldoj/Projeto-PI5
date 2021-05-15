import React, { useState } from 'react'

import Logo from '../../assests/Logo.png'
import Maris from '../../assests/desenvolvedores/Marinaldo.jpg';
import Felipe from '../../assests/desenvolvedores/Felipe.jpg';
import Fernanda from '../../assests/desenvolvedores/Fernanda.jpg';
import Isael from '../../assests/desenvolvedores/Isael.jpeg';
import { 
    Container,
    ContainerDevs,
    ContainerWelcome,
    ContainerLogo,
    ContainerDescription,
    PerfilDev,
    NameDev,
    DescriptionDev,
} from './styles';

export default function Dashboard(){

    const [enableDevs, setEnableDevs] = useState(false)

    return(
        <Container>
            <ContainerWelcome>
                <ContainerLogo>
                    <img src={Logo} onClick={() => setEnableDevs(!enableDevs)} alt='Imagem'/>
                </ContainerLogo>
                <ContainerDescription>
                    BOOKFLIX é uma biblioteca gratuita que não gera fundos nem frentes,
                    projeto é apenas ultilizado com intuito de ganhar pontos e passar
                    ná avaliação do projeto, por que se não... acho que nem existiria,
                    desde já estamos muito gratos em fazer o projeto.
                </ContainerDescription>
            </ContainerWelcome>
            <ContainerDevs EnableDevs={enableDevs}>
                <PerfilDev>
                    <img src={Maris} alt='Maris' />
                    <NameDev>Marinaldo Carvalho</NameDev>
                    <DescriptionDev> Desenvolvedor Front end </DescriptionDev>
                </PerfilDev>
                <PerfilDev>
                    <img src={Felipe} alt='Felipe' />
                    <NameDev>Felipe Pereira</NameDev>
                    <DescriptionDev> Desenvolvedor Back end </DescriptionDev>
                </PerfilDev>
                <PerfilDev>
                    <img src={Fernanda} alt='Fernanda' />
                    <NameDev>Fernanda Mota</NameDev>
                    <DescriptionDev> Desenvolvedora Back end </DescriptionDev>
                </PerfilDev>
                <PerfilDev>
                    <img src={Isael} alt='Isael' />
                    <NameDev>Isael Pereira</NameDev>
                    <DescriptionDev> Desenvolvedor Front end </DescriptionDev>
                </PerfilDev>
            </ContainerDevs>
        </Container>
    )
}