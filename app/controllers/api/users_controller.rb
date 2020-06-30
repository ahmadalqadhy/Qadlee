class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.profile_pic.attach(io: open("app/assets/images/tumblr-pp.png"), filename: "tumblr-pp.png")
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_pic)
  end
end

