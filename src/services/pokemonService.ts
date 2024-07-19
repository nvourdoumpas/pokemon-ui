import apiInstance from "@/apiInstance";

class TutorialDataService {
  getPokemons(offset: number, limit: number): Promise<any> {
    return apiInstance.get("/pokemon", {
      params: {
        offset: offset,
        limit: limit,
      },
    });
  }

  getPokemon(id: number): Promise<any> {
    return apiInstance.get(`/pokemon/${id}`);
  }
}

export default new TutorialDataService();
