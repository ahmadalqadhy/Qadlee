# @posts.each do |post|
#     json.extract! post, :id, :post_type
#     # json.photoUrl url_for(post.photo)
# end

json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post
end
