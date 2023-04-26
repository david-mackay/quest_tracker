import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createUser = async (name) => {
  const response = await axios.post(`${API_URL}/users`, { name });
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createQuest = async (title, user_id) => {
  const response = await axios.post(`${API_URL}/quests`, { title, user_id });
  return response.data;
};

export const getUserQuests = async (user_id) => {
  const response = await axios.get(`${API_URL}/quests/${user_id}`);
  return response.data;
};
