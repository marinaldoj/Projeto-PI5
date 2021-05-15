import React, { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle, FiLogIn } from 'react-icons/fi'
import { 
    AiOutlineHome, 
    AiOutlineUnorderedList, 
    AiOutlineSearch,
    AiOutlineClockCircle,
} from 'react-icons/ai'

import { 
    Container, 
    ContainerTitle, 
    LogoTitle, 
    ConteinerMenu,
    ContainerItem,
    ItensTitle,
} from './styles';

export default function Aside(){

    const [closeMenu, setCloseMenu] = useState(true)
    
    return(
        <Container closeMenu={closeMenu}>
            <ContainerTitle >
                <LogoTitle onClick={() => setCloseMenu(!closeMenu)}>{closeMenu ? "Flix" : "BOOKFLIX"}</LogoTitle>
                {closeMenu ? 
                    <FiArrowRightCircle 
                        size={24} 
                        onClick={() => setCloseMenu(!closeMenu)}
                        style={{cursor: 'pointer'}}
                    /> : 
                    <FiArrowLeftCircle 
                        size={24} 
                        onClick={() => setCloseMenu(!closeMenu)}
                        style={{cursor: 'pointer'}}
                    />
                }
            </ContainerTitle>
            <ConteinerMenu>
                <ContainerItem to="/" >
                    <AiOutlineHome  size={24} />
                    {closeMenu ? null : <ItensTitle>Início</ItensTitle> }
                </ContainerItem>
                <ContainerItem to="/catalog" >
                    <AiOutlineUnorderedList size={24} />
                    {closeMenu ? null : <ItensTitle>Catálogo</ItensTitle> }
                </ContainerItem>
                <ContainerItem to="/">
                    <AiOutlineSearch size={24} />
                    {closeMenu ? null : <ItensTitle>Buscar</ItensTitle> }
                </ContainerItem>
                <ContainerItem to="/">
                    <AiOutlineClockCircle size={24} />
                    {closeMenu ? null : <ItensTitle>Recentes</ItensTitle> }
                </ContainerItem>
            </ConteinerMenu>
            <ContainerTitle>
                <FiLogIn size={24} />
                {closeMenu ? null : <ItensTitle>Sing in</ItensTitle> }                
            </ContainerTitle>
        </Container>
    )
}