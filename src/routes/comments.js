const express = require('express');
const commentsController = require('../controllers/commentsController');

const setCommentsRoutes = (app) => {
    app.get('/posts/:postId/comments', commentsController.getCommentsForPost.bind(commentsController));
    app.post('/posts/:postId/comments', commentsController.createComment.bind(commentsController));
};

module.exports = setCommentsRoutes;