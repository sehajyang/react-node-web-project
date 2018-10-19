const Album = require('models/album');

const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  // 검증 실패
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // 400 Bad Request
    return null;
  } 

  return next();
};

/*
  GET /api/albums
*/
exports.list = async (ctx) => {
  try{
    const albums = await Album.find().exec();
    ctx.body = albums;
  } catch(e) {
    ctx.throw(e);
    console.log(e);
  }
};

/*
  GET /api/albums/:album_title
*/
exports.albumitemlist = async (ctx) => {
  const { album_title } = ctx.params;

  const query = { album_title: album_title }; 

  try {
    const album = await Album.find(query).exec();
    
    // 존재하지 않음
    if (!album) {
      ctx.status = 404;
      console.log(album_title);
      return;
    }
    ctx.body = album;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  GET /api/albums/:id
*/
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const album = await Album.findById(id).exec();
    // 존재하지 않음
    if (!album) {
      ctx.status = 404;
      return;
    }
    ctx.body = album;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

