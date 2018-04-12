class PlantController < ApplicationController

  def index
    # every plant where the garden index is equal to the garden_index in params
    @plants = Plant.where(garden_index: params[:garden_index])
  end

  def create
  end

end