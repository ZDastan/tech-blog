
const router = require("express").Router();
const { Post, Comment, User } = require("../models");
// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include:[User],
        
      });
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET one post
router.get('/post/:id', async (req, res) => {
    try {
      const dbpostData = await Post.findByPk(req.params.id, {
        include: [
            User,
            {
              model: Comment,
              include: [User],
            },
        ],
      });
  
      const post = dbPostData.get({ plain: true });
      // Send over the 'loggedIn' session variable to the 'gallery' template
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
