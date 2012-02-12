require 'spec_helper'

describe User, user_model: true do
  let (:user_adriano) { Factory :user_adriano }
  
  describe "name" do
    it { should have_valid(:name).when("Adriano", "Flach") }
    it { should_not have_valid(:name).when(nil, "a" * 51) }
  end
  
  describe "sector" do
    it { should have_valid(:sector).when() }
    it { should_not have_valid(:sector).when() }
  end
  
  describe "working project" do
    it { should have_valid(:working_project).when() }
    it { should_not have_valid(:working_project).when() }
  end
  
  describe "email" do
    it { should have_valid(:email).when(nil, "adriano@email.com.br") }
    it { should_not have_valid(:email).when("a" * 61, "adriano", "adriano@email") }
  end
  
  describe "receive email" do
    it { should have_valid(:receive_email).when(true, false) }
    it { should_not have_valid(:receive_email).when(nil) }
  end
  
  describe "login" do
    it { should have_valid(:login).when("flach") }
    it { should_not have_valid(:login).when(user_adriano.login) }
  end
  
  describe "password" do
    it { should have_valid(:password).when("123") }
    it { should_not have_valid(:password).when() }
  end
  
  describe "bussiness rules" do
    describe "receive email change" do
      user_adriano.update_attribute :receive_email, true
      user_adriano.save
    end
  end
end
