import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
`;

export const ContainerContent = styled.div`
    background-color: #fff;
    height: 92vh;
    border-radius: 10px;
`;

export const ButtonAdd = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #016795;
    position: absolute;
    bottom: 40px;
    right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 8;
    :hover{
        background-color: #004666;
    }
`;