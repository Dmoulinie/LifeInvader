// github-api.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const getAllCommentPost = async (postId) => {
  try {
      const response = await axios.get(`${apiUrl}/comments/get-all-from-post/${postId}`);
  
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

export default getAllCommentPost;