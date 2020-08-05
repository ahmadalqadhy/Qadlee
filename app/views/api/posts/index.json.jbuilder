# @posts.each do |post|
#     json.extract! post, :id, :title, :body, :post_type, :author_id
#     # json.photoUrl url_for(post.photo)
# end

# json.array! @posts do |post|
#   json.partial! 'api/posts/post', post: post
# end

# @posts.each do |post|
#     json.extract! post, :id, :title, :body, :post_type, :author_id
#         json.author do
#             json.username post.author.username
#             json.profilePicUrl url_for(post.author.profile_pic)
#         end
#     if post.photo.attached?
#         json.photoUrl url_for(post.photo)
#     end
# end

@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :body, :post_type, :author_id
            json.author do
                json.username post.author.username
                json.profilePicUrl url_for(post.author.profile_pic)
            end
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
        json.liked_users post.liked_users
    end
end