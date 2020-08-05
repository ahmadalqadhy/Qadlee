export const likePost = (like) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like },
  });
};

export const unlikePost = (postId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${postId}`,
  });
};

export const fetchLikes = (postId) => {
  return $.ajax({
    method: "GET",
    url: `/api/likes/${postId}`,
  });
};
