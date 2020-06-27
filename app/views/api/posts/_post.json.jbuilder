json.extract! post, :id, :title, :body, :post_type, :author_id
if post.photo.attached?
    json.photoUrl url_for(post.photo)
end