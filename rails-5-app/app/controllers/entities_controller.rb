class EntitiesController < ApplicationController
  def index
    render json: to_render
  end

  private

  def to_render
    {
      status: :ok,
      meta: {
        is_this_metadata: true
      }
    }
  end
end
