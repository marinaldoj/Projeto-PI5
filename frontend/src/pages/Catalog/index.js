import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import img from '../../assests/livro1.jpeg';

import api from '../../services/api';
import { 
    Container,
    ContainerBook,
    Book,
    TitleBook,
    DescriptionBook,
    ContainerTitle,
    ContainerModal,
    ContainerModalImage,
    ContainerModalStatusBook,
} from './styles';

Modal.setAppElement('#root')

const customStyles = {
    overlay: {
        zIndex: 10,
        background: 'rgba(0, 0, 0,0.5)',
    },
    content : {
      top         : '50%',
      left        : '50%',
      right       : 'auto',
      bottom      : 'auto',
      marginRight : '-50%',
      transform   : 'translate(-50%, -50%)',
      width       : '70%',
      height      : '65%',
      padding     : 10,
      border      : 'none'
    }
};

export default function Catalog(){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [book, setBook] = useState('');
    const [books, setBooks] = useState('');

    function OpenModal(book){
        setBook(book);
        setModalIsOpen(!modalIsOpen);
    }

    async function getBooks(){
        const {data} = await api.get('/book/index');
        setBooks(data)
    }

    useEffect(() => {
        getBooks()
        console.log(books)
    }, []);

    return(
        <Container>
            <ContainerBook>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(!modalIsOpen)}                 
                style={customStyles}                                                                   
                >
                    <ContainerModal>
                        <ContainerModalImage>
                            <img src={book == '' ? null : book.links.cover} alt={`Imagem do livro ${book.title}`}/>
                        </ContainerModalImage>
                        <ContainerModalStatusBook>
                            <TitleBook modalMargin={true}>Nome: {book.title}</TitleBook>
                            <TitleBook modalMargin={true}>Autor: {book.author}</TitleBook>
                            <DescriptionBook>{book.description}</DescriptionBook>
                        </ContainerModalStatusBook>
                    </ContainerModal>
                </Modal>
                {books.length > 0 ? books.map((book, index) => {
                    return(
                        <Book key={index} onClick={() => OpenModal(book)}>
                            <img src={book.links.cover} alt={book.title}/>
                            <ContainerTitle>
                                <TitleBook>{book.title}</TitleBook>
                                <DescriptionBook>{book.author}</DescriptionBook>
                            </ContainerTitle>
                        </Book>
                        
                    )
                }) : null}                                          
            </ContainerBook>
        </Container>
    )
}