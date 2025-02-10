// src/data/anime.ts

export interface Episode {
    number: number;
    title: string;
    videoUrl: string;
  }
  
  export interface Anime {
      id: string;
      title: string;
      imageUrl: string;
      categories: string[];
      rating: number;
      episodes?: Episode[];
      status: 'Ongoing' | 'Completed' | 'Upcoming';
      type: 'TV' | 'Hentai' | 'OVA';
      censored: boolean;
      description: string;
      trailerUrl?: string;
      releaseYear: number;
      studio: string;
  }
  
  export const animeData: Anime[] = [
      {
          id: "overflow",
          title: "Overflow",
          imageUrl: "/img/overflow.jpg",
          categories: ["Nuevos", "Sin Censura"],
          rating: 5,
          episodes: [
              { number: 1, title: "Episodio 1", videoUrl: "https://www.youtube.com/embed/8tQqMgaYX54?si=d2Mk3Z5gj-odLkI1" },
              { number: 2, title: "Episodio 2", videoUrl: "https://www.youtube.com/embed/7dui-8gCb3A?si=CeDVN9MKLZuw1nTn" },
              { number: 3, title: "Episodio 3", videoUrl: "https://example.com/overflow-ep3" },
              { number: 4, title: "Episodio 4", videoUrl: "https://example.com/overflow-ep4" },
              { number: 5, title: "Episodio 5", videoUrl: "https://example.com/overflow-ep5" },
              { number: 6, title: "Episodio 6", videoUrl: "https://example.com/overflow-ep6" },
              { number: 7, title: "Episodio 7", videoUrl: "https://example.com/overflow-ep7" },
              { number: 8, title: "Episodio 8", videoUrl: "https://example.com/overflow-ep8" },
          ],
          status: "Ongoing",
          type: "Hentai",
          censored: false,
          description: "La trama se centra en la vida de Kazushi Sudou, un joven universitario que vive con sus dos amigas de la infancia, las hermanas Ayane y Kotone Shirakawa. Todo comienza de manera casual cuando las hermanas deciden usar el baño de Kazushi y, a partir de ahí, surgen una serie de situaciones íntimas y comprometedoras que van intensificándose con cada episodio. El anime presenta una historia llena de malentendidos, momentos de comedia y un enfoque en situaciones románticas y sensuales entre los personajes principales. Aunque Overflow contiene contenido explícito, es considerado más ligero en comparación con otras obras hentai, ya que mantiene un tono más relajado y cómico en algunos momentos.",
          trailerUrl: "https://www.youtube.com/embed/maV5wZXV8Ro?si=cUkUU1F-P2vgMIom",
          releaseYear: 2020,
          studio: "Studio Hokiboshi."
      },
      // Puedes agregar más animes aquí siguiendo el mismo formato
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