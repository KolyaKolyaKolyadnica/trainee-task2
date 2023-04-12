class ThemoviedbApi {
  KEY: string;
  URL: string;

  constructor() {
    // Need remove to .env?
    this.KEY = "63fcefaaeb569f05e001a1d867f25d51";

    // Public config
    this.URL = `https://api.themoviedb.org`;
  }

  async getData(optionStr: string) {
    const response = await fetch(optionStr);
    if (response.ok) {
      return response.json();
    }
    return await Promise.reject(new Error("Ошибка. Что то пошло не так."));
  }

  fetchTrend(page = 1) {
    const optionStr = `${this.URL}/3/trending/all/day?api_key=${this.KEY}&page=${page}`;
    return this.getData(optionStr);
  }

  fetchPopular(page = 1) {
    const optionStr = `${this.URL}/3/movie/popular?api_key=${this.KEY}&page=${page}`;
    return this.getData(optionStr);
  }

  fetchNowPlaying(page = 1) {
    const optionStr = `${this.URL}/3/movie/now_playing?api_key=${this.KEY}&page=${page}`;
    return this.getData(optionStr);
  }

  fetchMovieById(id: string | undefined) {
    const optionStr = `${this.URL}/3/movie/${id}?api_key=${this.KEY}`;
    return this.getData(optionStr);
  }

  fetchCastById(id: string | undefined) {
    const optionStr = `${this.URL}/3/movie/${id}/credits?api_key=${this.KEY}`;
    return this.getData(optionStr);
  }

  getKeywords(id: string | undefined) {
    const optionStr = `${this.URL}/3/movie/${id}/keywords?api_key=${this.KEY}`;
    return this.getData(optionStr);
  }

  getMoviesByKeywordId(keywordId: string | null, page = 1) {
    const optionStr = `${this.URL}/3/keyword/${keywordId}/movies?api_key=${this.KEY}&keywordId=111`;
    return this.getData(optionStr);
  }

  async getAllFirstPage() {
    let trends = await this.fetchTrend();
    let popular = await this.fetchPopular();
    let nowPlaying = await this.fetchNowPlaying();

    return { trends, popular, nowPlaying };
  }
}

const api = new ThemoviedbApi();

export default api;
