class Project < ActiveRecord::Base
  belongs_to  :created_by,  class_name: "User"
end
