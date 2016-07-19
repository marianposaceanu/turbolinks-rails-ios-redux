Rails.application.routes.draw do
  root to: 'home#index'
  get '/entities', to: 'entities#index'
end
