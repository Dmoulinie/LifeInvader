// CenterPostComments.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${apiUrl}/comments/get-all-from-post/${postId}`);
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 404) {
      return []; // Return an empty array instead of throwing an error
    } else {
      throw new Error(`Error fetching comments for post ${postId}: ${response.status}`);
    }
  } catch (error) {
    return []; // Return an empty array instead of throwing an error
  }
};

export { getCommentsByPostId };