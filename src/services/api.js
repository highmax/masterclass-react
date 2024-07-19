import axios from "axios";

// base url from .env
const BASE_URL = import.meta.env.VITE_API_URL;
const FAVORITE_PATH = '/jsonapi/v1/favorite';
const headers = {
  'Content-Type': 'application/json',
};

export const getCourses = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/jsonapi/v1/courses?email=${email}`);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching courses', error);
    throw error;
  }
}

export const addFavorite = async (email, courseId) => {
  try {
    const response = await axios.post(`${BASE_URL}${FAVORITE_PATH}`, {
      email,
      course_id: courseId
    }, {
      headers
    });
    return response.data;
  }
  catch (error) {
    console.error('Error adding favorite', error);
    throw error;
  }
}

export const removeFavorite = async (email, courseId) => {
  try {
    const response = await axios.delete(`${BASE_URL}${FAVORITE_PATH}`, {
      data: {
        email,
        course_id: courseId
      }
    },
    {
      headers
    });
    return response.data;
  }
  catch (error) {
    console.error('Error removing favorite', error);
    throw error;
  }
}
