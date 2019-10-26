class CategoryController < ApplicationController

  def show
    category = Category.find(params[:id])
    render json: TransactionSerializer.new(category.transactions)
  end

  def update
    
  end
end
