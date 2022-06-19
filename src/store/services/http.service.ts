const baseURL = "http://localhost:3000";
const httpService = {
  get: async <T>(path: string) => {
    const response = await fetch(`${baseURL}${path}`);
    if (!response.ok) {
      const message = response.statusText;
      throw new Error(message);
    }
    return response.json() as Promise<T>;
  },
};

export default httpService;
