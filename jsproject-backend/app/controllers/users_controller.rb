class UsersController < ApplicationController

  def login
    if user = User.find_by(:name => params[:name])
      budget = user.budget
      options= {include: [:user, :categories]}
      render json: BudgetSerializer.new(budget, options)
    else
      render json: {status: "error", code: 400, message: "No user found by that name." }
    end
  end

  def create
    user = User.new(name: params[:name])
    if user.save
      budget = Budget.create(total: 0, user_id: user.id)
      options = {include: [:user, :categories]}
      render json: BudgetSerializer.new(budget, options)
    else
      render json: {status: "error", message: "There is a problem with that name, try another"}
    end
  end
end
