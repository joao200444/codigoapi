// Dados estáticos da biblioteca
const bibliotecaData = {
    obras: [
        {
            id: '1',
            titulo: 'Bale Through the Heavens',
            sinopse: 'Uma história de cultivo onde o protagonista perde seus poderes e precisa recuperá-los.',
            imagem: 'https://m.media-amazon.com/images/M/MV5BODkyYTRlMDItY2EzYy00OWVjLWJhNWQtZDJhZTU5NzhlZDZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg',
            genero: 'Ação',
            status: 'Em Andamento',
            rating: 4.5
        },
        {
            id: '2',
            titulo: 'Sol Land',
            sinopse: 'Tang San embarca em uma jornada para se tornar um mestre das artes marciais.',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZjE1ZmQ0MTQtYTdlZS00MjZiLWE3ZjQtODc0NWVkNDE5YjY3XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg',
            genero: 'Fantasia',
            status: 'Em Andamento',
            rating: 4.8
        },
        {
            id: '3',
            titulo: 'The King\'s Avatar',
            sinopse: 'Um jogador profissional de e-sports recomeça sua jornada após ser forçado a se aposentar.',
            imagem: 'https://images3.alphacoders.com/135/135655.jpg',
            genero: 'Esporte',
            status: 'Completo',
            rating: 4.7
        },
        {
            id: '4',
            titulo: 'Perfect World',
            sinopse: 'Em um mundo onde cultivadores buscam a perfeição, um jovem começa sua jornada para se tornar mais forte.',
            imagem: 'https://cdn.myanimelist.net/images/anime/1514/138414.jpg',
            genero: 'Fantasia',
            status: 'Em Andamento',
            rating: 4.3
        },
        {
            id: '5',
            titulo: 'Martial Universe',
            sinopse: 'Lin Dong descobre um anel misterioso e embarca em uma jornada de cultivo marcial.',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZjg5OWRmZjQtZGE4OS00ZjYxLTgzNzktMzVlZDQ5N2ZkZDYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            genero: 'Ação',
            status: 'Completo',
            rating: 4.6
        },
        {
            id: '6',
            titulo: 'A Record of a Mortal\'s Journey to Immortality',
            sinopse: 'Han Li, um farmacêutico comum, encontra uma oportunidade única de se tornar um cultivador imortal.',
            imagem: 'https://cdn.myanimelist.net/images/anime/1593/118798.jpg',
            genero: 'Fantasia',
            status: 'Em Andamento',
            rating: 4.9
        }
    ]
};

// API da biblioteca
const BibliotecaAPI = {
    // Buscar todos os cards
    getAllCards: function() {
        return bibliotecaData.obras;
    },

    // Buscar card por ID
    getCardById: function(id) {
        return bibliotecaData.obras.find(card => card.id === id);
    },

    // Buscar cards por gênero
    getCardsByGenre: function(genre) {
        return bibliotecaData.obras.filter(card => 
            card.genero.toLowerCase() === genre.toLowerCase()
        );
    },

    // Buscar cards por nome
    searchCardsByName: function(query) {
        const searchTerm = query.toLowerCase();
        return bibliotecaData.obras.filter(card => 
            card.titulo.toLowerCase().includes(searchTerm)
        );
    }
};
