import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: ${ props => props.closeMenu === true ? '100px' : '220px'};
    height: 100vh;
    background-color: #1B2431;
    transition: 0.4s;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;    
    justify-content: space-around;
    padding: ${ props => props.closeMenu === true ? '20px 0px' : '20px'};
    color: #fff;
`;

export const ConteinerMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 78%;       
`;

export const ContainerItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 20%;
    width: 100%;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    :hover{
        background-color: #fff;
        color: #1B2431;
        
        span{
            color: #1B2431;
        }
    }
`;

export const ItensTitle = styled.span`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const LogoTitle = styled.span`
    font-size: 20px;
    color: rgb(255, 17, 17);
    font-weight: bold;
    cursor: pointer;
`;