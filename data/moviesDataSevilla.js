export const movies = [
    {
        id: 1,
        name: "Con Air",
        director: "Simon West",
        actors: "Nicolas Cage, John Cusack, John Malkovich",
        categories: "Acción, Crimen",
        sessions: [
            {id: 1, hour: "12:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 2,
        name: "The Rock",
        director: "Michael Bay",
        actors: "Sean Connery, Nicolas Cage, Ed Harris",
        categories: "Acción, Suspense",
        sessions: [
            {id: 1, hour: "13:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "16:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "19:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 3,
        name: "Training Day",
        director: "Antoine Fuqua",
        actors: "Denzel Washington, Ethan Hawke",
        categories: "Crimen, Drama",
        sessions: [
            {id: 1, hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "20:00", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 4,
        name: "Snatch",
        director: "Guy Ritchie",
        actors: "Brad Pitt, Benicio del Toro, Jason Statham",
        categories: "Crimen, Comedia",
        sessions: [
            {id: 1, hour: "12:30", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "15:30", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "18:30", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    },
    {
        id: 5,
        name: "Lock, Stock and Two Smoking Barrels",
        director: "Guy Ritchie",
        actors: "Jason Flemyng, Dexter Fletcher, Nick Moran",
        categories: "Crimen, Comedia",
        sessions: [
            {id: 1, hour: "13:30", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 2, hour: "16:30", language: Math.random() < 0.5 ? "castellano" : "vose"},
            {id: 3, hour: "19:30", language: Math.random() < 0.5 ? "castellano" : "vose"}
        ]
    }
];
