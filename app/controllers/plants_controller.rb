class PlantsController < ApplicationController

  def index
    # every plant where the garden index is equal to the garden_index in params
    plants = Plant.where(garden_index: params[:garden_index])
    render json: plants
  end

  def create
    plant = Plant.create!(name: params[:plant][:name], garden_index: params[:plant][:gardenIndex])
    render json: plant
  end

end