class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :amount, :created_at, :'category'
  belongs_to :category
end
