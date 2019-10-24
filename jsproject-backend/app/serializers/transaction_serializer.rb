class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :amount, :created_at
  belongs_to :budget
end
