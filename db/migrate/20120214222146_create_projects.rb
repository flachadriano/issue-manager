class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string  :name,          null: false, limit: 100
      t.integer :created_by_id, null: false
      t.integer :updated_by_id

      t.timestamps
    end
  end
end
