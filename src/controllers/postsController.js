const jsonPlaceholderService = require('../services/jsonPlaceholderService');
class PostsController {
    async getAllPosts(req, res) {
        try {
            const posts = await jsonPlaceholderService.fetchPosts();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching posts' });
        }
    }

    async getUserPosts(req, res) {
        const userId = req.params.userId;
        try {
            const posts = await jsonPlaceholderService.fetchPostById(userId);
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user posts' });
        }
    }

    async createPost(req, res) {
        const newPost = req.body;
        try {
            const createdPost = await jsonPlaceholderService.createPost(newPost);
            res.status(201).json(createdPost);
        } catch (error) {
            res.status(500).json({ message: 'Error creating post' });
        }
    }
}

module.exports = new PostsController();