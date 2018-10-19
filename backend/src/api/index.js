const Router = require('koa-router');
const posts = require('./posts');
const albums = require('./albums');

const api = new Router();

api.use('/posts', posts.routes());
api.use('/albums', albums.routes());

module.exports = api;
