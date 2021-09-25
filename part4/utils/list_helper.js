const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likesList = blogs.map((list) => list.likes);

  const reducer = (sum, item) => {
    return sum+item;
  };

  if (!likesList) {
    return 0;
  } else if (likesList.length===1) {
    return likesList[0];
  } else {
    return likesList.reduce(reducer, 0);
  }
};

module.exports = {
  dummy, totalLikes,
};
