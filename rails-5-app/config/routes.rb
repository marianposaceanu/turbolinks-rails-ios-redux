Rails.application.routes.draw do
  root to: 'home#index'
  get '/faq', to: 'home#faq'

  get '/entities', to: 'entities#index'
end
