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
  const { album_titles } = ctx.params;
  console.log(album_titles);

  const query = album_titles ?{
    album_title : album_titles } : {}; 

  try {
    const album = await Album.find(query).exec();
    console.log(album_titles);
    
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

/*
  GET /api/albums/:album_title/:id
*/
exports.read = async (ctx) => {
  const { id, album_titles } = ctx.params;
  console.log(id, album_titles);
  const query = {
    album_title : album_titles, 
    num: id 
    }; 

  try {
    const album = await Album.find(query).exec();
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

