class CategoryController < ApplicationController
  before_action :find_category, only: [:show, :update]
  def show
    render json: TransactionSerializer.new(@category.transactions)
  end

  def update
    @category.available = params[:available]
    @category.save
    options= {include: [:budget]}
    render json: CategorySerializer.new(@category, options)
  end

  def create
    category = Category.new(budget_id: params[:budget_id], name: params[:category_name], available: 0)
    if category.save
      options= {include: [:budget]}
      render json: CategorySerializer.new(category, options)
    else
      render json: {type: "error", message: "Something went wrong"}
    end
  end
  private

  def find_category
    @category = Category.find(params[:id])
  end
end
