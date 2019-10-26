class BudgetController < ApplicationController


  def update
    budget = Budget.find(params[:id])
    budget.total = params[:total]
    if budget.save
      render json: BudgetSerializer.new(budget)
    else
      render json: {type: "error", message: "Something Went Wrong"}
    end
  end

end
