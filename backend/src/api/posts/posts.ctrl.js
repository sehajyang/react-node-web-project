const Post = require('models/post');
const Joi = require('joi');


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
  POST /api/posts
*/
exports.write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    s_location: Joi.string(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required() 
  });

  // 첫 번째 파라미터는 검증할 객체, 두 번째는 스키마
  const result = Joi.validate(ctx.request.body, schema);

  // 오류 발생 시 오류 내용 응답
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, s_location, body, tags } = ctx.request.body;

  // Post 인스턴스를 생성합니다.
  const post = new Post({
    title, s_location, body, tags
  });

  try {
    await post.save(); 
    ctx.body = post; // 결과 반환.
  } catch (e) {
    ctx.throw(e, 500);
  }
};


/*
  GET /api/posts
*/
exports.list = async (ctx) => {
  // page가 주어지지 않았다면 1로 간주
  const page = parseInt(ctx.query.page || 1, 10);
  const { tag } = ctx.query;

  const query = tag ? {
    tags: tag // tags 배열에 tag를 가진 포스트 찾기
  } : {};

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    const limitBodyLength = post => ({
      ...post,
      body: post.body.length < 350 ? post.body : `${post.body.slice(0, 350)}...`
    });
    ctx.body = posts.map(limitBodyLength);

    ctx.set('Last-Page', Math.ceil(postCount / 10));
  } catch (e) {
    ctx.throw(500, e);
  }
};



/*
  GET /api/posts/:id
*/
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    // 포스트가 존재하지 않음
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};


/*
  DELETE /api/posts/:id
*/
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};


/*
  PATCH /api/posts/:id
  { title, s_location body, tags }
*/
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

