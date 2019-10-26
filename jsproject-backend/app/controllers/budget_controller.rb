class BudgetController < ApplicationController


  def update
    budget = Budget.find(params[:id])
    budget.total = params[:total]
    if budget.save
      resp json: BudgetSerializer.new(budget)
    else
      resp json: {type: "error", message: "Something Went Wrong"}
  end

end
