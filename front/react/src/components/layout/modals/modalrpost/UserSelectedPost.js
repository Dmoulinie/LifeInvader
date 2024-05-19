// github-api.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

const getPost = async (postId) => {
  try {
      const response = await axios.get(`${apiUrl}/api/getimagebyid/${postId}`);
  
      if (response.status === 200) {
        const userData = response.data;
        return userData;
      } else {
        throw new Error(`Error fetching user posts data: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      return []; // Return an empty array instead of throwing an error
    }
};

export default getPost;