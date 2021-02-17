Rails.application.routes.draw do

  get '/', to: 'conversations#index'

  resources :thoughts
  resources :messages
  resources :conversations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
