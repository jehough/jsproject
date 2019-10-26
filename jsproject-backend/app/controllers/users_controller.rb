class UsersController < ApplicationController

  def login
    if user = User.find_by(:name => params[:name])
      budget = user.budget
      options= {include: [:categories]}
      render json: BudgetSerializer.new(budget, options)
    else
      render json: {status: "error", code: 400, message: "No user found by that name." }
    end
  end

  def new
    User.create(name: params[:name])
  end
end
