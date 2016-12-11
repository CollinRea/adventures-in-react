Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'site#index'
end
