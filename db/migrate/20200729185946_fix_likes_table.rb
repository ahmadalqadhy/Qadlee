class FixLikesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :likeable_type
    remove_column :likes, :likeable_id
    add_column :likes, :post_id, :integer, null: false
    remove_index :likes, :user_id
    add_index :likes, [:post_id, :user_id], unique: true

  end
end
