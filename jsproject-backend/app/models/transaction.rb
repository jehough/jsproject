class Transaction < ApplicationRecord
  belongs_to :category

  def updateBudget
    category = self.category
    category.available -= self.amount
    category.save
    budget = category.budget
    budget.total -= self.amount
    budget.save
  end
end
