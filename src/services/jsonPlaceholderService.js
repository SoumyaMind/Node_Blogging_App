import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const fetchPostById = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
};

export const createPost = async (postData) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
};

export const fetchCommentsForPost = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
};

export const createComment = async (postId, commentData) => {
    const response = await axios.post(`${API_URL}/posts/${postId}/comments`, commentData);
    return response.data;
};