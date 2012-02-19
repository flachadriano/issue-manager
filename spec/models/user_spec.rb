require 'spec_helper'

describe User, user_model: true do
  let (:user_adriano) { Factory :user_adriano }
  
  describe "name" do
    it{ should have_valid(:name).when("Adriano", "Flach") }
    it{ should_not have_valid(:name).when(nil, "a" * 51) }
  end
  
  describe "sector" do
    it{ should have_valid(:sector).when(nil, Factory(:sector_development)) }
  end
  
  describe "working project" do
    it{ should have_valid(:working_project).when(nil, Factory(:project_finance)) }
  end
  
  describe "receive email" do
    it{ should have_valid(:receive_email).when(true) }
    it{ should_not have_valid(:receive_email).when(nil) }
  end
  
  describe "login" do
    it{ should have_valid(:login).when("flach") }
    it{ should_not have_valid(:login).when(user_adriano.login) }
  end
  
  describe "bussiness rules" do
    it "receive email change" do
      user_adriano.update_attribute :email, nil
      user_adriano.update_attribute :receive_email, true
      user_adriano.save
      user_adriano.errors.to_json.should == '{"email":["can\'t be blank"]}'
    end
  end
end
