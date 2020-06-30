# json.extract! user, :id, :username, :email

json.extract! user, :id, :username, :email
json.profilePicUrl url_for(user.profile_pic)
# if @user.profile_pic.attached?
#     json.profilePicUrl url_for(@user.profile_pic)
# end