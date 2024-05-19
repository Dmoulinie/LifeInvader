// CenterPostComments.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const sendComment = async (postId, authorId, authorName, content) => {
  try {
    const requestBody = { postId, authorId, authorName, content };
    // console.log('Comment:', requestBody);
    const response = await axios.post(`${apiUrl}/comments/add`, requestBody);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleSubmitComment = async (event, postId, userData) => {
  event.preventDefault();
  const commentInput = document.querySelector(`#comment-${postId}`);
  const content = commentInput.value;
  const authorId = userData.id;
  const authorName = userData.name;

  commentInput.value = ''; // Clear the input field
  const button = document.querySelector(`#button-${postId}`);
//   console.log(button); // Check if button is null
  if (button) {
    button.disabled = true;
    button.classList.remove('bg-sky-600');
    button.classList.add('bg-slate-400');
  } else {
    console.error(`Button with id #button-${postId} not found`);
  }
  sendComment(postId, authorId, authorName, content);
};

export { handleSubmitComment, sendComment };