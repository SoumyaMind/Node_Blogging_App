const express = require('express');
const postsController = require('../controllers/postsController');

const setPostsRoutes = (app) => {
    app.get('/api/posts', postsController.getAllPosts.bind(postsController));
    app.get('/api/users/:userId/posts', postsController.getUserPosts.bind(postsController));
    app.post('/api/posts', postsController.createPost.bind(postsController));
};

module.exports = setPostsRoutes;