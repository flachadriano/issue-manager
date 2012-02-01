class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string      :name,          null: false, limit: 50
      t.references  :sector
      t.integer     :working_project_id
      t.string      :email,                      limit: 60
      t.boolean     :receive_email, null: false
      t.string      :login,         null: false, limit: 15
      t.string      :password,      null: false, limit: 128

      t.timestamps
    end
  end
end
