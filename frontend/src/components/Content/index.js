import React, { useState, useRef } from 'react'
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

    const filesElement = useRef(null);

    const [modalSecondary, setModalSecondary] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [numeropg, setNumeroPg] = useState('')
    const [file, setFile] = useState('')

    async function  onSubmit(){
        await setFile(await convertBase(file))
        let dataFd = new FormData();
        let livro
        livro = {
            titulo,
            autor,
            descricao,
            data,
            numeropg
        }
        dataFd.append('livro', livro.toString())
        dataFd.append('file', file)

        console.log(file)
        await api.post('/biblioteca/livros', dataFd)
    }

    async function convertBase (file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
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
                            multiple ref={filesElement}
                            value={file}
                            onChange={() => setFile(filesElement)}
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