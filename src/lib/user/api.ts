"use server";

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export const addUser = async (user: { name: string; email: string }) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (id: number, user: { name: string; email: string }) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
