import React from 'react'


import livro1 from '../../assests/livro1.jpeg';
import livro2 from '../../assests/livro2.jpg';
import livro3 from '../../assests/livro3.png';
import { 
    Container,
    ContainerBook,
    Book,
    TitleBook,
    DescriptionBook,
    ContainerTitle,
} from './styles';

export default function Catalog(){

    const mockBook = [
        {
            title: 'Senhor dos Anéis',
            year: '2021',
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
            title: 'Harry Potter',
            year: '2021',
            author: 'J. K. Rowling',
            image: livro2,
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
            title: 'Pokémon ',
            year: '2021',
            author: 'Nitendo',
            image: livro3,
            description: `O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto
            da cidade de Pallet, que sonha se tornar um Mestre Pokémon. ... Ao longo de sua
            jornada, Ash faz vários amigos e participa de grandes torneios, enquanto 
            enfrenta a Equipe Rocket, uma atrapalhada equipe que faz de tudo para roubar 
            pokémons raros.`
        },
        {
            title: 'Senhor dos Anéis',
            year: '2021',
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
            title: 'Harry Potter',
            year: '2021',
            author: 'J. K. Rowling',
            image: livro2,
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
            title: 'Pokémon ',
            year: '2021',
            author: 'Nitendo',
            image: livro3,
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
                {mockBook.map((book, index) => {
                    return(
                        <Book key={index}>
                            <img src={book.image}/>
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