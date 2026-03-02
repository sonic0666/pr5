import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
});

export const api = {
  getGames: async () => {
    const response = await apiClient.get('/games');
    return response.data;
  },
  getGameById: async (id) => {
    const response = await apiClient.get(`/games/${id}`);
    return response.data;
  },
  createGame: async (game) => {
    const response = await apiClient.post('/games', game);
    return response.data;
  },
  updateGame: async (id, game) => {
    const response = await apiClient.patch(`/games/${id}`, game);
    return response.data;
  },
  deleteGame: async (id) => {
    await apiClient.delete(`/games/${id}`);
  },
};

