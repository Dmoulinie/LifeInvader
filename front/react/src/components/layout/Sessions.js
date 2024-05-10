// github-api.js
import axios from 'axios';

const apiUrl = 'http://localhost:8080/github';

const getUserInfo = async (accessToken) => {
  try {
    const response = await axios.get(`${apiUrl}/getUserByToken`, {
      params: {
        accesstoken: accessToken,
      },
    });

    if (response.status === 200) {
      const userData = response.data;
      return userData;
    } else {
      console.error('Error fetching user data:', response.status);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export { getUserInfo };