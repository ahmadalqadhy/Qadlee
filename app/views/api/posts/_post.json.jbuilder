json.extract! post, :id, :title, :body, :post_type, :author_id, :author
if post.photo.attached?
    json.photoUrl url_for(post.photo)
end