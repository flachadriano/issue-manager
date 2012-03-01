# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120219194140) do

  create_table "projects", :force => true do |t|
    t.string  "name",          :limit => 100, :null => false
    t.integer "created_by_id",                :null => false
    t.integer "updated_by_id"
  end

  create_table "sectors", :force => true do |t|
    t.integer "project_id",                       :null => false
    t.string  "name",              :limit => 100, :null => false
    t.integer "origin_sector_id"
    t.integer "destiny_sector_id"
    t.integer "created_by_id",                    :null => false
    t.integer "updated_by_id"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                                :default => "", :null => false
    t.string   "encrypted_password",                   :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "authentication_token"
    t.string   "name",                   :limit => 50,                 :null => false
    t.integer  "sector_id"
    t.integer  "working_project_id"
    t.integer  "receive_email",                                        :null => false
    t.string   "login",                  :limit => 15, :default => "", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token", :unique => true
  add_index "users", ["login"], :name => "index_users_on_login", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
