class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :total
  has_many :categories
  has_many :transactions, through: :categories
end
