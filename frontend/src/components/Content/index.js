import React, { useState } from 'react'
import Modal from 'react-modal'
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api'

import { 
    Container,
    ContainerContent,
    ButtonAdd,
    ContainerBook,
    ContainerForm,
    Title,
    BookInput,
    BookText,
    ButtonConfirma,
    ContainerModal
} from './styled';

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

export default function Content({children}){

    const [modalSecondary, setModalSecondary] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [numeropg, setNumeroPg] = useState('')
    const [file, setFile] = useState('')
    const [cover, setCover] = useState('')

    async function  onSubmit(){
        let dataFd = new FormData();
        dataFd.append('title', titulo);
        dataFd.append('author', autor);
        dataFd.append('description', descricao);
        dataFd.append('date_publish', data);
        dataFd.append('nm_page', numeropg);
        dataFd.append('archive_path', file);
        dataFd.append('cover_path', cover);

        await api.post('/book/create', dataFd);
        setModalSecondary(false);
    }

    return(
        <Container>
            <ButtonAdd>
                <Modal
                    isOpen={modalSecondary}
                    onRequestClose={() => setModalSecondary(!modalSecondary)}
                    style={customStyles}           
                >
                    <ContainerModal>
                        <ContainerBook>
                            <ContainerForm>
                                <Title>Título :</Title>
                                <BookInput 
                                placeholder={' ex: Harry Potter'}
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                />
                            </ContainerForm>
                            <ContainerForm>
                                <Title>Autor :</Title>
                                <BookInput 
                                placeholder={' ex: Harry Potter'}
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                                />
                            </ContainerForm>
                            <ContainerForm>
                                <Title>Data :</Title>
                                <BookInput 
                                type='date'
                                placeholder={' ex: Harry Potter'}
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                />
                            </ContainerForm>
                            <ContainerForm>
                                <Title>N° de Paginas :</Title>
                                <BookInput 
                                placeholder={' ex: 1350'}
                                value={numeropg}
                                onChange={(e) => setNumeroPg(e.target.value)}
                                />
                            </ContainerForm>
                        </ContainerBook>
                        <ContainerBook>
                            <ContainerForm>
                                <Title>Descrição :</Title>
                                <BookText 
                                placeholder={' ex: Harry Potter'}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                />
                            </ContainerForm>
                            <Title>Arquivo :</Title><input type='file' style={{
                                margin: '8px 0 8px 0',
                            }}
                            onChange={(e) => setFile(e.target.files[0])}                           
                            />
                           <Title>Capa :</Title><input type='file' style={{
                                margin: '8px 0 8px 0',
                            }}
                            onChange={(e) => setCover(e.target.files[0])}                           
                            />
                            <ButtonConfirma onClick={() => onSubmit()}>
                                Enviar
                            </ButtonConfirma>
                        </ContainerBook>
                    </ContainerModal>
                </Modal>
                <FiPlus 
                    size={28} 
                    style={{cursor: 'pointer', color: '#ffffff'}}
                    onClick={() => setModalSecondary(!modalSecondary)}
                />
            </ButtonAdd>
            <ContainerContent>
                {children}
            </ContainerContent>
        </Container>
    )
}