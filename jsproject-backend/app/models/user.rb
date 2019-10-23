class User < ApplicationRecord
  has_one :budget
  has_secure_password
end
