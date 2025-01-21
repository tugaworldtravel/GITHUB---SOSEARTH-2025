var config = {
    accessToken: 'pk.eyJ1IjoidHVnYXdvcmxkdHJhdmVsIiwiYSI6ImNtNXZkMzEwMzAwbGUyanF6dXVtOHQ5anoifQ.9VMIO6xw7aUD_uSileHqSw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, // Ativar 3D se necessário
    auto: false,
    title: 'SOS EARTH',
    subtitle: 'A plataforma para mapear eventos climáticos',
    byline: 'Por Daniel Rodrigues',
    footer: 'Fonte: documentações, etc. <br> Criado usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    // Definindo o índice inicial para 'map.html'
    index: 'map.html',

    chapters: [
        {
            id: 'slug-style-id',
            hidden: true,
            title: 'World',
            location: {
                center: [20, 40],
                zoom: 2.3,
                pitch: -10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'image-chapter',
            hidden: false,
            title: '',
            image: './assets/AVEIRO.jpeg', // A primeira imagem que ocupa a tela inteira
            location: {
                center: [20, 40],
                zoom: 2.3,
                pitch: -10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // Alterando o fundo para a imagem de "AVEIRO.jpeg"
                () => {
                    document.body.style.backgroundImage = "url('./assets/AVEIRO.jpeg')";
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.getElementById('map').style.display = 'none'; // Oculta o mapa
                }
            ],
            onChapterExit: [
                () => {
                    document.body.style.backgroundImage = 'none'; // Remove a imagem de fundo
                    document.getElementById('map').style.display = 'block'; // Mostra o mapa novamente
                }
            ]
        },
        {
            id: 'text-chapter',
            hidden: false,
            title: 'Combater as alterações climáticas',
            image: '',
            description: 'Texto explicativo sobre a importância de combater as alterações climáticas.',
            location: {
                center: [-8.3675, 40.7333],
                zoom: 4,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // Garantindo que o texto vai ser exibido na tela
                () => {
                    document.getElementById('map').style.display = 'none'; // Esconde o mapa quando o capítulo de texto aparece
                }
            ],
            onChapterExit: [
                () => {
                    document.getElementById('map').style.display = 'block'; // Reexibe o mapa quando o capítulo sai
                }
            ]
        },
        {
            id: 'DC-chapter',
            hidden: false,
            title: 'Washington, D.C.',
            style: 'mapbox://styles/tugaworldtravel/cm5wfmwp600rx01s34i715irn', // Estilo personalizado
            image: './assets/washington-dc.jpg',
            description: 'Washington, D.C. é a capital dos EUA, e está sempre no centro das decisões políticas globais.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'image-chapter-2',
            hidden: false,
            title: '',
            image: './assets/SOS_14.JPG', // Segunda imagem que ocupa toda a tela
            location: {
                center: [20, 40],
                zoom: 2.3,
                pitch: -10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                () => {
                    document.body.style.backgroundImage = "url('./assets/SOS_14.JPG')";
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.getElementById('map').style.display = 'none';
                }
            ],
            onChapterExit: [
                () => {
                    document.body.style.backgroundImage = 'none';
                    document.getElementById('map').style.display = 'block';
                }
            ]
        }
    ]
};