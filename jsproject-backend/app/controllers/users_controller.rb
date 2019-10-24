class UsersController < ApplicationController

  def login
    if user = User.find_by(:name => params[:name])
      render json: {name: "cool"}
    else
      render json: {status: "error", code: 400, message: "No user found by that name." }
    end
  end

  def new
  end
end
