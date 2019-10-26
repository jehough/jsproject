class TransactionsController < ApplicationController

  def create
    puts params
    transaction = Transaction.new(description: params[:description], amount: params[:amount].to_i, category_id: params[:category_id])
    if transaction.save
      transaction.updateBudget
      options= {include: [:budget]}
      render json: CategorySerializer.new(transaction.category, options)
    else
      render json: {type: "error", message: "Did not process!"}
    end
  end
end
