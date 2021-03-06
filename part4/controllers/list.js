// eslint-disable-next-line new-cap
const blogRouter = require('express').Router();
const Blog = require('../models/blog');

blogRouter.get('/', (request, response) => {
  Blog
      .find({})
      .then((blogs) => {
        response.json(blogs);
      });
});

blogRouter.post('/', async (request, response) => {
  const blog = await new Blog(request.body);

  blog
      .save()
      .then((result) => {
        response.status(201).json(result);
      });
});

module.exports = blogRouter;
