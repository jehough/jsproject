class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :available
  belongs_to :budget
  has_many :transactions
end
