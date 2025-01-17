var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoidHVnYXdvcmxkdHJhdmVsIiwiYSI6ImNtNXZkMzEwMzAwbGUyanF6dXVtOHQ5anoifQ.9VMIO6xw7aUD_uSileHqSw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, // Set true for enabling 3D maps.
    auto: false,
    title: 'SOS EARTH',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By Daniel Rodrigues',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    // Atualizando o caminho do index
    index: 'earth.html',  // Agora, "earth.html" será a página principal no config

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
            id: 'Portugal-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Portugal',
            image: './assets/AVEIRO.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-8.3675, 40.7333], // Updated coordinates for Sever do Vouga, Portugal
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'DC-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            style: 'mapbox://styles/tugaworldtravel/cm5wfmwp600rx01s34i715irn',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks.',
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
            id: 'Geneva-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            style: 'mapbox://styles/tugaworldtravel/cm5idrk8q001w01rzd6ts6zy1',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Argentina-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Tokyo-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Tokyo',
            image: './assets/tokyo.jpg',
            description: 'Tokyo, Japan\'s bustling capital, is known for its skyscrapers, shopping, and pop culture.',
            location: {
                center: [139.6917, 35.6895],
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};