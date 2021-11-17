const path = require("path");
//const notes = require(path.resolve("src/data/notes-data"));
const ratings = require(path.resolve("src/data/ratings-data"));


function list(req, res) {
  res.json({ data: ratings });
}

function ratingExists(req, res, next) {
  const ratingId = Number(req.params.ratingId);
  const foundRating = ratings.find((rating) => rating.id === ratingId);
  if (foundRating) {
    res.locals.rating = foundRating
    return next();
  }
  next({
    status: 404,
    message: `Rating id not found: ${req.params.ratingId}`,
  });
}

function read(req, res) {
  res.json({ data: res.locals.rating });
}


function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    message: `${req.method} not allowed for ${req.originalUrl}`,
  });
};

module.exports = {
  list,
  read: [ratingExists, read],
  methodNotAllowed,
};
