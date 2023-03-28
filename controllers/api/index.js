const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;