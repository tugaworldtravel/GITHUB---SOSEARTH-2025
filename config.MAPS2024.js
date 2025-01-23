var config = {
    accessToken: 'pk.eyJ1IjoidHVnYXdvcmxkdHJhdmVsIiwiYSI6ImNtNXZkMzEwMzAwbGUyanF6dXVtOHQ5anoifQ.9VMIO6xw7aUD_uSileHqSw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: false,
    insetOptions: {
        markerColor: 'black', // Defina a cor do marcador para preto
        globeColor: '#FF0000' // Defina a cor do globo
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
            image: './assets/SOS_5.JPG',
            description: '',
            location: {
                center: [-8.3675, 40.7333],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
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
            image: './assets/SOS_6.JPG', // Adicione a imagem aqui
            description: '',
            location: {
                center: [15.3875, -23.2333],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
            hidden: false,
            alignment: 'full'
        },
        {
            id: 'Geneva-chapter',
            alignment: 'center',
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
            id: 'Australia-chapter',
            alignment: 'center',
            title: '',
            image: './assets/SOS_8.JPG', // Adicione a imagem aqui
            description: '',
            location: {
                center: [],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
            hidden: false,
            alignment: 'full'
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
            image: './assets/SOS_6.JPG',
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
        },
        {
            id: 'Rwanda-chapter',
            alignment: 'center',
            title: '',
            style: 'mapbox://styles/tugaworldtravel/cm68c6y1e000q01qubihg3zv1',
            image: './assets/SOS_5.JPG', // Adicione a imagem aqui
            description: '',
            location: {
                center: [0,0],
                zoom: 0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
            hidden: false,
            alignment: 'full'
        },
        {
            id: 'China-chapter',
            alignment: 'fully',
            title: 'Buenos Aires',
            image: './assets/SOS_20.JPG',
            description: 'Buenos Aires, a capital da Argentina, conhecida pela cultura de tango.',
            location: {
                center: [116.39723, 39.9075],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
