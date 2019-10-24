class UsersController < ApplicationController

  def login
    if user = User.find_by(:name => params[:name])
      budget = user.budget
      render json: BudgetSerializer.new(budget)
    else
      render json: {status: "error", code: 400, message: "No user found by that name." }
    end
  end

  def new
  end
end
