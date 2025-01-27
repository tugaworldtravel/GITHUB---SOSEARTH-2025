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
                center: [-8.4810, 40.6939],
                zoom: 8.5,
                pitch: 20,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'DC-chapter',
            alignment: 'right',
            title: 'Washington, D.C.',
            style: 'mapbox://styles/tugaworldtravel/cm6ew1wmi000s01s998fyhpy6',
            image: './assets/washington-dc.jpg',
            description: 'A vibrante capital dos EUA, conhecida pelos seus marcos icónicos.',
            location: {
                center: [34.3015, -13.2543], // Longitude; Latitude
                zoom: 8.5,
                pitch: 60,
                bearing: -25.2
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
            style: 'mapbox://styles/tugaworldtravel/cm6ew1wmi000s01s998fyhpy6',
            image: './assets/geneva.jpg',
            description: 'Genebra, Suíça: uma cidade pitoresca junto ao Lago Genebra.',
            location: {
                center: [69.3451, 30.3753],
                zoom: 5,
                pitch: 8.01,
                bearing: 50.00
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
                center: [-81.7603, 27.9944],
                zoom: 5,
                pitch: 3,
                bearing: -20
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
                center: [37.3833, 37.0662],
                zoom: 8,
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
                center: [77,1734, 31,1048],
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
