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

export const ContainerBook = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8px 0; 
`;


export const Title = styled.label`
    font-size: 18px;
    font-weight: 500;
    
`;

export const BookInput = styled.input`
    width:  300px;
    height: 30px;
    border: 1px solid #016795;
    padding-left: 10px;
`;

export const BookText = styled.textarea`
    width:  300px;
    height: 100px;
    border: 1px solid #016795;
    padding-left: 10px;
`;

export const ButtonConfirma = styled.button`
    width:  150px;
    height: 30px;
    background-color: #016795;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    :hover{
        background-color: #004666;
    }
`;

export const ContainerModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
