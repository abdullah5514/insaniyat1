class PostsController < ApplicationController
  def index
  end

  def new  	
  	@post = Post.new
  end

  def show
  end

  def create
  	@post = Post.new(permit_post)
  	if @post.save
  		redirect_to post_path(@post)
  	end
  end

  def about
    
  end

  private
  	def permit_post
  		params.require(:post).permit(:name,:fathername)
  	end
end
