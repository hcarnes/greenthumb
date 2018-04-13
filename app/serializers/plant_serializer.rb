class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :gardenIndex

  def gardenIndex
    object.garden_index
  end
end
