import React from 'react';

import Aside from '../Aside';
import Content from '../Content';
import { Container } from './styles'


export default function Layout({children}){
    return(
            <Container>
                <Aside />
                <Content>
                    {children}
                </Content>  
            </Container>
    )
}