const Router = require('koa-router');
const albumsCtrl = require('./albums.ctrl');

const albums = new Router();

albums.get('/', albumsCtrl.list);
albums.get('/:id',albumsCtrl.checkObjectId, albumsCtrl.read);
albums.get('/:album_title',albumsCtrl.checkObjectId, albumsCtrl.albumitemlist);

module.exports = albums;
