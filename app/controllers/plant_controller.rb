class PlantController < ApplicationController

  def index
    @plants = Plant.where(garden_index: params[:garden_index])
  end

end