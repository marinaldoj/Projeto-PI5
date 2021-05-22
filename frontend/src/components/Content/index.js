import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';

import Modal from '../Modal'
import { 
    Container,
    ContainerContent,
    ButtonAdd
} from './styled';

export default function Content({children}){

    const [modalSecondary, setModalSecondary] = useState(true)

    return(
        <Container>
            <ButtonAdd>
                <Modal isOpen={modalSecondary}/>
                <FiPlus 
                    size={28} 
                    style={{cursor: 'pointer', color: '#ffffff'}}
                />
            </ButtonAdd>
            <ContainerContent>
                {children}
            </ContainerContent>
        </Container>
    )
}