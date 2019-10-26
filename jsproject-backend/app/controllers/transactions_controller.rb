class TransactionsController < ApplicationController

  def create
    transaction = Transaction.new(description: params[:description], amount: params[:amount].to_i, category_id: params[:category_id])
    if transaction.save
      transaction.updateBudget
      options= {include: [:budget]}
      render json: CategorySerializer.new(transaction.category, options)
    else
      render json: {type: "error", message: "Did not process!"}
    end
  end

  def destroy
    transaction = Transaction.find(params[:id])
    category = transaction.category
    transaction.undoUpdateBudget
    transaction.destroy
    options= {include: [:budget]}
    render json: CategorySerializer.new(category, options)
  end
end
