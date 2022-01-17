import express from 'express';

import { getPosts, getPost, createPost, deletePost } from '../controllers/reviews.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
// router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;