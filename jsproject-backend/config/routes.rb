Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/users' => 'users#login'
  post '/users/new' => 'users#new'
  resources :category, only: [:show, :update, :create]
  resources :transactions, only: [:create]
end
