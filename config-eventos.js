var configEventos = {
    accessToken: 'pk.eyJ1IjoidHVnYXdvcmxkdHJhdmVsIiwiYSI6ImNtNXZkMzEwMzAwbGUyanF6dXVtOHQ5anoifQ.9VMIO6xw7aUD_uSileHqSw',
    style: 'mapbox://styles/mapbox/streets-v11',  // Estilo padrão para os capítulos com mapas

    chapters: [
        // Primeiro capítulo - Mapa centrado na Europa
        {
            id: 'world-map',
            title: 'Mapa Mundial - Europa Central',
            description: 'Primeiro capítulo mostrando o mapa centrado na Europa.',
            location: {
                center: [10, 50], // Centrado na Europa
                zoom: 3,
                bearing: 0,
                pitch: 45
            },
            mapAnimation: 'flyTo',  // Usando flyTo para animar a transição
            rotateAnimation: false,
            image: '',  // Não usamos imagem aqui, pois é um mapa
        },
        
        // Segundo capítulo - Imagem de Aveiro
        {
            id: 'aveiro-image',
            title: 'Aveiro',
            description: 'Capítulo com a imagem de Aveiro ocupando toda a tela.',
            image: './assets/AVEIRO.jpeg',  // Imagem de fundo
            location: {
                center: [0, 0], // Localização não usada aqui, porque é uma imagem
                zoom: 0, 
                bearing: 0,
                pitch: 0
            },
            mapAnimation: '',  // Não há animação de mapa
            rotateAnimation: false,
        },
        
        // Terceiro capítulo - Texto explicativo
        {
            id: 'climate-change-text',
            title: 'Combate às Alterações Climáticas',
            description: 'Texto explicando a importância de combater as alterações climáticas.',
            image: '',  // Sem imagem aqui
            location: {
                center: [0, 0],
                zoom: 0,
                bearing: 0,
                pitch: 0
            },
            mapAnimation: '',  // Sem animação de mapa
            rotateAnimation: false,
        },
        
        // Quarto capítulo - Mapa com estilo DC
        {
            id: 'washington-dc-map',
            title: 'Washington D.C.',
            description: 'Mapas interativos de Washington D.C.',
            image: '',  // Não há imagem
            location: {
                center: [-77.0369, 38.9072],  // Localização de Washington DC
                zoom: 10,
                bearing: 0,
                pitch: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
        },
        
        // Quinto capítulo - Imagem de Aveiro
        {
            id: 'second-aveiro-image',
            title: 'Aveiro (Segunda Parte)',
            description: 'Outra imagem de Aveiro ocupando toda a tela.',
            image: './assets/AVEIRO.jpeg',  // Imagem de fundo
            location: {
                center: [0, 0],
                zoom: 0,
                bearing: 0,
                pitch: 0
            },
            mapAnimation: '',  // Sem animação de mapa
            rotateAnimation: false,
        }
    ]
};