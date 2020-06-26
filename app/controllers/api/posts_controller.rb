class Api::PostsController < ApplicationController
   
    def index
        backward_posts = Post.all
        @posts = backward_posts.reverse
        # debugger
        render :index
    end

    def show
        @post = Post.find(params[:id])
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render @post.errors.full_messages, status: 401
        end
    end


    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show
        else
            render ['Could not find post']
        end
    end

    private

    def post_params
        params.require(:post).permit(:post_type, :title, :body, :author_id)
    end

end
