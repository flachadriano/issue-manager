class Sectors < ActiveRecord::Migration
  def change
    create_table :sectors do |t|
      t.references  :project,       null: false
      t.string      :name,          null: false, limit: 100
      t.integer     :origin_sector_id
      t.integer     :destiny_sector_id
      t.integer     :created_by_id, null: false
      t.integer     :updated_by_id
    end
  end
end
