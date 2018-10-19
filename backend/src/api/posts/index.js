const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);

posts.post('/', postsCtrl.write);
posts.delete('/:id',postsCtrl.checkObjectId, postsCtrl.remove);
posts.patch('/:id',postsCtrl.checkObjectId, postsCtrl.update);

module.exports = posts;
