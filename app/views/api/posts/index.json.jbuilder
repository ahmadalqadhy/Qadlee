@posts.each do |post|
    json.extract! post, :id, :post_type
    json.photoUrl url_for(post.photo)
end