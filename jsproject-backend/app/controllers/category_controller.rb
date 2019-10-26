class CategoryController < ApplicationController
  before_action :find_category, only: [:show, :update]
  def show
    render json: TransactionSerializer.new(@category.transactions)
  end

  def update
    @category.available = params[:available]
    options= {include: [:categories]}
    render json: BudgetSerializer.new(@category.budget, options)
  end

  private

  def find_category
    @category = Category.find(params[:id])
  end
end
