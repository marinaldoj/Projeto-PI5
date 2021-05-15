import styled, { keyframes } from 'styled-components';

const HomeLoading = keyframes`
    from{
        transform: translateY(-50px);
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;


export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerWelcome = styled.div`
    width: 100%;
    height: 48%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerLogo = styled.div`
    width: 80%;
    height: 48%;
    display: flex;
    justify-content: center;
    transition: 0.5;
    img{
        width: 240px;
    }
    animation: ${HomeLoading} 2s;
`;

export const ContainerDescription = styled.div`
    width: 60%;
    height: 48%;
    padding-top: 20px; 
    animation: ${HomeLoading} 2s;
`;

export const ContainerDevs = styled.div`

    width: 100%;
    height: 48%;
    padding: 10px;
    display: ${ props => props.EnableDevs === true ? 'flex' : 'none'};
    justify-content: space-around;  
    animation: ${HomeLoading} 2s;  
`;

export const PerfilDev = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    img{
        width: 215px;
        height: 210px;
    }
`;

export const NameDev = styled.label`
    font-size: 18px;
    font-weight: 500;
`;

export const DescriptionDev = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #ABABAB;
`;