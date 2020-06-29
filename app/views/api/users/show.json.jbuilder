json.extract! @user, :id, :username, :email
# json.profilePicUrl url_for(@user.profile_pic)
if @user.photo.attached?
    json.profilePicUrl url_for(@user.profile_pic)
end