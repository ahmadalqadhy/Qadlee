class Api::LikesController < ApplicationController

    def show
        @post = Post.includes(:liked_users).find(params[:id])
        render :index
    end

    def create
        # debugger
        @like = Like.new(like_params)
        # @like.user_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages
        end
    end

    def destroy
        @like = Like.find_by(
            user_id: current_user.id, 
            post_id: params[:id]
        )
        @like.destroy
        render :show
    end

    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end