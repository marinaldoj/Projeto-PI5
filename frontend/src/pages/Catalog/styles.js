import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

export const ContainerBook = styled.div`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0fr 0fr 0fr;
    grid-gap: 20px;   
`;

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    img{
        width: 200px;
        height: 200px;
    }
    :hover{
        transform: scale(1.2);
        opacity: 1;
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleBook = styled.label`
    font-size: 18px;
    font-weight: 500;
    margin: ${ props => props.modalMargin === true ? '10px 0' : 'none'};
`;

export const DescriptionBook = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #ABABAB;
`;

export const ContainerPaginate = styled.div`
    width: 100%;
    height: 10%;
    background-color: blue;
`;

export const ContainerModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerModalImage = styled.div`
    img{
        width: 300px;
        height: 350px;
    }
`;

export const ContainerModalStatusBook = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px; 
`;