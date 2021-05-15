import React, { useState } from 'react';
import Modal from 'react-modal';

import livro1 from '../../assests/livro1.jpeg';
import livro2 from '../../assests/livro2.jpeg';
import livro3 from '../../assests/livro3.jpeg';
import livro4 from '../../assests/livro4.jpeg';
import livro5 from '../../assests/livro5.jpeg';
import livro6 from '../../assests/livro6.jpeg';
import livro7 from '../../assests/livro7.jpeg';
import livro8 from '../../assests/livro8.jpeg';
import livro9 from '../../assests/livro9.jpeg';

import { 
    Container,
    ContainerBook,
    Book,
    TitleBook,
    DescriptionBook,
    ContainerTitle,
    ContainerModal,
    ContainerModalImage,
    ContainerModalStatusBook
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

    function OpenModal(book){
        setBook(book);
        setModalIsOpen(!modalIsOpen);
    }

    const mockBook = [
        {
            title: 'Senhor dos Anéis',
            year: '2001',
            author: 'Peter Jackson',
            image: livro1,
            description: `Escrita entre 1937 e 1949, com muitas partes criadas durante 
            a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit (1937). 
            Embora Tolkien tenha planejado realizá-la em volume único, a obra foi 
            originalmente publicada em três volumes 
            (The Fellowship of the Ring, The Two Towers e The Return of the King) 
            entre 1954 e 1955, com cada volume contendo dois livros cada, e foi assim, 
            em três volumes, que se tornou popular. Desde então, a obra foi reimpressa 
            várias vezes e traduzida para mais de 40 línguas, vendendo mais 160 milhões 
            de cópias, tornando-se um dos trabalhos mais populares da literatura do 
            século XX.`
        },
        {
            title: 'Coraline',
            year: '2009',
            author: 'J. K. Rowling',
            image: livro2,
            description: `Em sua nova casa, Coraline sente-se entediada, até que encontra 
            uma porta secreta que a leva a uma versão diferente — e melhor — de sua vida. 
            Esse mundo aparentemente perfeito acabará ficando perigoso demais, e Coraline 
            precisará ter coragem e esperteza para escapar e salvar sua família no mundo 
            real. `
        },
        {
            title: 'O Pequeno Príncipe ',
            year: '1943',
            author: 'Antoine de Saint-Exupéry',
            image: livro3,
            description: `Durante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para 
            a América do Norte. Em meio a turbulências pessoais e sua saúde falhando, ele 
            produziu quase metade das obras no qual ele seria lembrado, incluindo o conto de 
            solidão, amizade, amor e perda, em forma de um jovem príncipe que caiu na Terra. 
            Um livro de memórias feita pelo autor que recontava suas experiências de aviação 
            no Deserto do Saara, e é pensado que ele usou estas experiências como base para o 
            livro Le Petit Prince.`
        },
        {
            title: 'Construindo aplicações Node',
            year: '2015',
            author: 'William Bruno Moraes',
            image: livro4,
            description: `Escrita entre 1937 e 1949, com muitas partes criadas durante 
            a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit (1937). 
            Embora Tolkien tenha planejado realizá-la em volume único, a obra foi 
            originalmente publicada em três volumes 
            (The Fellowship of the Ring, The Two Towers e The Return of the King) 
            entre 1954 e 1955, com cada volume contendo dois livros cada, e foi assim, 
            em três volumes, que se tornou popular. Desde então, a obra foi reimpressa 
            várias vezes e traduzida para mais de 40 línguas, vendendo mais 160 milhões 
            de cópias, tornando-se um dos trabalhos mais populares da literatura do 
            século XX.`
        },
        {
            title: 'Aprendendo SQL',
            year: '2010',
            author: 'Alan Beaulieu',
            image: livro5,
            description: `A série narra as aventuras de um jovem chamado Harry James Potter,
            que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar 
            na Escola de Magia e Bruxaria de Hogwarts. O arco de história principal diz 
            respeito às amizades de Harry com outros bruxos de sua idade, como Ronald Weasley 
            e Hermione Granger, e também com o diretor de Hogwarts Albus Dumbledore, considerado
            o maior dos magos, e seus conflitos com o bruxo das trevas Lord Voldemort, que 
            pretende se tornar imortal, conquistar o mundo dos bruxos, subjugar as pessoas 
            não-mágicas e destruir todos aqueles que estão em seu caminho, especialmente 
            Harry Potter, a quem ele considera seu maior rival.`
        },
        {
            title: 'A Menina que Roubava Livros',
            year: '2005',
            author: 'Markus Zusak',
            image: livro6,
            description: `O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto
            da cidade de Pallet, que sonha se tornar um Mestre Pokémon. ... Ao longo de sua
            jornada, Ash faz vários amigos e participa de grandes torneios, enquanto 
            enfrenta a Equipe Rocket, uma atrapalhada equipe que faz de tudo para roubar 
            pokémons raros.`
        },
        {
            title: 'Harry Potter ',
            year: '2001',
            author: 'J. K. Rowling',
            image: livro7,
            description: `O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto
            da cidade de Pallet, que sonha se tornar um Mestre Pokémon. ... Ao longo de sua
            jornada, Ash faz vários amigos e participa de grandes torneios, enquanto 
            enfrenta a Equipe Rocket, uma atrapalhada equipe que faz de tudo para roubar 
            pokémons raros.`
        },
        {
            title: 'Percy Jackson ',
            year: '2010',
            author: 'Rick Riordan',
            image: livro8,
            description: `O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto
            da cidade de Pallet, que sonha se tornar um Mestre Pokémon. ... Ao longo de sua
            jornada, Ash faz vários amigos e participa de grandes torneios, enquanto 
            enfrenta a Equipe Rocket, uma atrapalhada equipe que faz de tudo para roubar 
            pokémons raros.`
        },
        {
            title: 'Orientação a Objetos ',
            year: '2018',
            author: 'Paulo Andrade',
            image: livro9,
            description: `O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto
            da cidade de Pallet, que sonha se tornar um Mestre Pokémon. ... Ao longo de sua
            jornada, Ash faz vários amigos e participa de grandes torneios, enquanto 
            enfrenta a Equipe Rocket, uma atrapalhada equipe que faz de tudo para roubar 
            pokémons raros.`
        },
    ];

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
                            <img src={book.image} alt={book.title}/>
                        </ContainerModalImage>
                        <ContainerModalStatusBook>
                            <TitleBook modalMargin={true}>Nome: {book.title}</TitleBook>
                            <TitleBook modalMargin={true}>Autor: {book.author}</TitleBook>
                            <DescriptionBook>{book.description}</DescriptionBook>
                        </ContainerModalStatusBook>
                    </ContainerModal>
                </Modal>
                {mockBook.map((book, index) => {
                    return(
                        <Book key={index} onClick={() => OpenModal(book)}>
                            <img src={book.image} alt={book.title}/>
                            <ContainerTitle>
                                <TitleBook>{book.title}</TitleBook>
                                <DescriptionBook>{book.author}</DescriptionBook>
                            </ContainerTitle>
                        </Book>
                        
                    )
                })}                                          
            </ContainerBook>
        </Container>
    )
}