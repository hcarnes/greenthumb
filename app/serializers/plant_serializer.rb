class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :gardenIndex, :likes

  def gardenIndex
    object.garden_index
  end
end
