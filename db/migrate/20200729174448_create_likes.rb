class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likeable, polymorphic: true, index: true
      t.string :user_id, null: false
      t.timestamps
    end

    add_index :likes, :user_id
  end
end
