class User < ApplicationRecord
  has_one :budget
  validates :name, presence: true
  validates :name, uniqueness: true
end
