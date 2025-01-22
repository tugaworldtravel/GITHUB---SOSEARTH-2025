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
    use3dTerrain: false,
    auto: false,
    footer: 'Fonte: Dados relevantes. Criado com <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',

    chapters: [
        {
            id: 'world-chapter',
            hidden: true, // Esconder o capítulo "Mundo"
            location: {
                center: [20, 40],
                zoom: 2.3,
                pitch: -10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Portugal-chapter',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            location: {
                center: [-8.3675, 40.7333],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                () => {
                    document.body.style.backgroundImage = "url('./assets/SOS_14.jpg')";
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.height = '100vh'; // Garantir que a imagem ocupa toda a tela
                    document.body.style.width = '100vw'; // Garantir que a imagem ocupa toda a largura
                    document.body.style.margin = '0'; // Remover margens
                    document.getElementById('map').style.display = 'none';
                }
            ],
            onChapterExit: [
                () => {
                    document.body.style.backgroundImage = "none";
                    document.getElementById('map').style.display = 'block';
                }
            ]
        },
        {
            id: 'DC-chapter',
            alignment: 'right',
            title: 'Washington, D.C.',
            style: 'mapbox://styles/tugaworldtravel/cm5wfmwp600rx01s34i715irn',
            image: './assets/washington-dc.jpg',
            description: 'A vibrante capital dos EUA, conhecida pelos seus marcos icónicos.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Namibia-chapter',
            alignment: 'center',
            title: '',
            image: '',
            description: '',
            location: {
                center: [18.4904, -22.9576],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                () => {
                    document.body.style.backgroundImage = "url('./assets/SOS_15.jgp')";
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.height = '100vh'; // Garantir que a imagem ocupa toda a tela
                    document.body.style.width = '100vw'; // Garantir que a imagem ocupa toda a largura
                    document.body.style.margin = '0'; // Remover margens
                    document.getElementById('map').style.display = 'none';
                }
            ],
            onChapterExit: [
                () => {
                    document.body.style.backgroundImage = "none";
                    document.getElementById('map').style.display = 'block';
                }
            ]
        },
        {
            id: 'Geneva-chapter',
            alignment: 'left',
            title: 'Genebra',
            style: 'mapbox://styles/tugaworldtravel/cm5idrk8q001w01rzd6ts6zy1',
            image: './assets/geneva.jpg',
            description: 'Genebra, Suíça: uma cidade pitoresca junto ao Lago Genebra.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Argentina-chapter',
            alignment: 'fully',
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, a capital da Argentina, conhecida pela cultura de tango.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Tokyo-chapter',
            alignment: 'center',
            title: 'Tóquio',
            image: './assets/tokyo.jpg',
            description: 'Tóquio, a capital do Japão, é conhecida pelos seus arranha-céus e cultura pop.',
            location: {
                center: [139.6917, 35.6895],
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
