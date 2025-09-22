const jsonPlaceholderService = require('../services/jsonPlaceholderService');
class CommentsController {
    async getCommentsForPost(req, res) {
        const postId = req.params.postId;
        try {
            const comments = await jsonPlaceholderService.fetchCommentsForPost(postId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching comments' });
        }
    }

    async createComment(req, res) {
        const { postId, name, email, body } = req.body;
        try {
            const newComment = await jsonPlaceholderService.createComment({ postId, name, email, body });
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({ message: 'Error creating comment' });
        }
    }
}

module.exports = new CommentsController();