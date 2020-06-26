# @posts.each do |post|
#     json.extract! post, :id, :title, :body, :post_type, :author_id
#     # json.photoUrl url_for(post.photo)
# end

json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post
end
