import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'

import api from '../../services/api';
import {
    Container,
    ContainerBook,
    ContainerForm,
    Title,
    BookInput,
    BookText,
    ButtonConfirma
} from './styles'

Modal.setAppElement('#root')

const customStyles = {
    overlay: {
        zIndex: 20,
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

export default function ModalAdd ({isOpen}) {

    const [modalIsOpen, setModalIsOpen] = useState(isOpen)
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [numeropg, setNumeroPg] = useState('')
    const [file, setFile] = useState('')

    useEffect( () => {
        setModalIsOpen(isOpen)
    }, [isOpen])

    async function  onSubmit(){
        let livro
        livro = {
            titulo,
            autor,
            descricao,
            data,
            numeropg
        }

        await api.post('/biblioteca/livros', [livro,file])
    }

    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}           
        >
            <Container>
                <ContainerBook>
                    <ContainerForm>
                        <Title>Título :</Title>
                        <BookInput 
                        placeholder={' Harry Poti'}
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        />
                    </ContainerForm>
                    <ContainerForm>
                        <Title>Autor :</Title>
                        <BookInput 
                        placeholder={' Harry Poti'}
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        />
                    </ContainerForm>
                    <ContainerForm>
                        <Title>Data :</Title>
                        <BookInput 
                        type='date'
                        placeholder={' Harry Poti'}
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        />
                    </ContainerForm>
                    <ContainerForm>
                        <Title>N° de Paginas :</Title>
                        <BookInput 
                        placeholder={' Harry Poti'}
                        value={numeropg}
                        onChange={(e) => setNumeroPg(e.target.value)}
                        />
                    </ContainerForm>
                </ContainerBook>
                <ContainerBook>
                    <ContainerForm>
                        <Title>Descrição :</Title>
                        <BookText 
                        placeholder={' Harry Poti'}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        />
                    </ContainerForm>
                    <input type='file' style={{
                        margin: '8px 0 8px 0',
                    }} 
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    />
                    <ButtonConfirma onClick={() => onSubmit()}>
                        Enviar
                    </ButtonConfirma>
                </ContainerBook>
            </Container>
        </Modal>
    )
}