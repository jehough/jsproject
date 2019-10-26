class TransactionsController < ApplicationController

  def create
    puts params
    transaction = Transaction.new(description: params[:description], amount: params[:amount].to_i, category_id: params[:category_id])
    if transaction.save
      transaction.updateBudget
      
  end
end
