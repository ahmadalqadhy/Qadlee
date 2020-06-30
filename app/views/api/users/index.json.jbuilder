json.array! @users do |user|
    json.extract! user, :id, :username, :email
    # json.author_id do
    #     # json.extract 
    #     json.partial "api/users/user", user: post.author.id
    # end
    if user.profile_pic.attached?
        json.profilePicUrl url_for(user.profile_pic)
    end
end
