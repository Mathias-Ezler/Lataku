// src/data/anime.ts
export interface Anime {
    id: string;
    title: string;
    imageUrl: string;
    categories: string[];
    rating: number;
    episodes?: number;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    type: 'TV' | 'Hentai' | 'OVA';
    censored: boolean;
    description: string;
    trailerUrl?: string; // URL del video de YouTube
    releaseYear: number;
    studio: string;
}


export const animeData: Anime[] = [
    {
        id: "overflow",
        title: "Overflow",
        imageUrl: "/img/overflow.jpg",
        categories: ["Nuevos", "Sin Censura",],
        rating: 5,
        episodes: 8,
        status: "Ongoing",
        type: "Hentai",
        censored: false,
        description: "La trama se centra en la vida de Kazushi Sudou, un joven universitario que vive con sus dos amigas de la infancia, las hermanas Ayane y Kotone Shirakawa. Todo comienza de manera casual cuando las hermanas deciden usar el baño de Kazushi y, a partir de ahí, surgen una serie de situaciones íntimas y comprometedoras que van intensificándose con cada episodio. El anime presenta una historia llena de malentendidos, momentos de comedia y un enfoque en situaciones románticas y sensuales entre los personajes principales. Aunque Overflow contiene contenido explícito, es considerado más ligero en comparación con otras obras hentai, ya que mantiene un tono más relajado y cómico en algunos momentos.",
        trailerUrl: "https://www.youtube.com/embed/maV5wZXV8Ro?si=cUkUU1F-P2vgMIom",
        releaseYear: 2020,
        studio: "Studio Hokiboshi."
    },
    {
        id: "isekai-killer",
        title: "The Man Who Saved Me on My Isekai Trip Was a Killer",
        imageUrl: "/img/anime3.webp",
        categories: ["Nuevos", ],
        rating: 4.5,
        episodes: 12,
        status: "Upcoming",
        type: "Hentai",
        censored: true,
        description: "La historia sigue a la protagonista, quien es transportada a otro mundo y es salvada por un hombre misterioso con un oscuro secreto: él es un asesino. A pesar de su naturaleza violenta, este hombre se convierte en su protector en un mundo lleno de peligros. Este anime combina acción, supervivencia, y un vínculo poco convencional en medio de constantes amenazas y decisiones difíciles.",
        trailerUrl: "https://www.youtube.com/embed/vwAdNdhyfi0?si=Nsa-iwzxpTZprq7X",
        releaseYear: 2024,
        studio: "Studio TBD"
    },

    // Agrega más animes aquí
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