// github-api.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

const getAllPosts = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getallimage`);
    
        if (response.status === 200) {
          return response.data;
        } else if (response.status === 404) {   
          return []; // Return an empty array instead of throwing an error
        } else {
          throw new Error(`Error fetching user posts data: ${response.status}`);
        }
      } catch (error) {
        return []; // Return an empty array instead of throwing an error
      }
};

export default getAllPosts;