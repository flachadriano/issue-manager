class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :login, :password, :password_confirmation, :remember_me
  
  belongs_to  :sector
  belongs_to  :working_project, class_name: "Project"
  
  validates   :name,          presence: true,
                              length: {maximum: 50}
  
  validates   :receive_email, presence: true
  
  validates   :login,         presence: true,
                              uniqueness: true,
                              length: {maximum: 15}
end
