export const movies = [
    {
        id: 1,
        name: "Spirited Away",
        director: "Hayao Miyazaki",
        actors: "Rumi Hiiragi, Miyu Irino",
        categories: "Animación, Fantasía",
        sessions: [
            {id: 1, hour: "10:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "13:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "16:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 2,
        name: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        actors: "Matthew Broderick, Jeremy Irons",
        categories: "Animación, Aventura",
        sessions: [
            {id: 1, hour: "12:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 3,
        name: "Titanic",
        director: "James Cameron",
        actors: "Leonardo DiCaprio, Kate Winslet",
        categories: "Drama, Romance",
        sessions: [
            {id: 1, hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "20:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 4,
        name: "The Dark Knight",
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger",
        categories: "Acción, Crimen, Drama",
        sessions: [
            {id: 1, hour: "13:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "16:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "19:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 5,
        name: "Coco",
        director: "Lee Unkrich, Adrian Molina",
        actors: "Anthony Gonzalez, Gael García Bernal",
        categories: "Animación, Aventura, Familia",
        sessions: [
            {id: 1, hour: "11:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    }
];
