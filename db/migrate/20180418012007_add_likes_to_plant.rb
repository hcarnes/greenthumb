class AddLikesToPlant < ActiveRecord::Migration[5.1]
  def change
    add_column :plants, :likes, :integer, default: 0
  end
end
