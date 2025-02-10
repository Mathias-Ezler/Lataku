// src/data/anime.ts
export interface Anime {
    id: string;
    title: string;
    imageUrl: string;
    categories: string[];
    rating: number;
    episodes?: number;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    type: 'TV' | 'Movie' | 'OVA';
    censored: boolean;
}

export const animeData: Anime[] = [
    {
        id: "overflow",
        title: "Overflow",
        imageUrl: "/img/overflow.jpg",
        categories: ["Nuevos"],
        rating: 4.8,
        episodes: 25,
        status: "Ongoing",
        type: "TV",
        censored: false
    },
    {
        id: "the-dangers-in-my-heart",
        title: "The Dangers in My Heart",
        imageUrl: "/img/anime2.webp",
        categories: ["Sin Censura"],
        rating: 4.8,
        episodes: 25,
        status: "Ongoing",
        type: "TV",
        censored: false
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan",
        imageUrl: "/img/h3.webp",
        categories: ["Acción", "Fantasía"],
        rating: 9.1,
        episodes: 75,
        status: "Completed",
        type: "TV",
        censored: false
    },
];


// Obtener categorías únicas
export const getCategories = () => {
    const categories = new Set<string>();
    animeData.forEach(anime => {
        anime.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories);
};

// Obtener animes por categoría
export const getAnimesByCategory = (category: string) => {
    return animeData.filter(anime => anime.categories.includes(category));
};

// Obtener anime por ID
export const getAnimeById = (id: string) => {
    return animeData.find(anime => anime.id === id);
};