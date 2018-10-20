const Router = require('koa-router');
const albumsCtrl = require('./albums.ctrl');

const albums = new Router();

albums.get('/', albumsCtrl.list);
albums.get('/:album_titles/:id', albumsCtrl.read);
albums.get('/:album_titles', albumsCtrl.albumitemlist);

module.exports = albums;
