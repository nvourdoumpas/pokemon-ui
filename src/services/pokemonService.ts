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

  get(id: any): Promise<any> {
    return apiInstance.get(`/tutorials/${id}`);
  }

  findByTitle(title: string): Promise<any> {
    return apiInstance.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
