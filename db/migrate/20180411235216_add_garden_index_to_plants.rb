class AddGardenIndexToPlants < ActiveRecord::Migration[5.1]
  def change
    add_column :plants, :garden_index, :integer
  end
end
