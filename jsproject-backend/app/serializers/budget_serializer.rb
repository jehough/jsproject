class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :total
  has_many :categories
end
