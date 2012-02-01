# encoding: UTF-8

require 'spec_helper'

describe User, user_model: true do
  describe "name" do
    it { should have_valid(:name).when("Adriano", "José") }
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
    it { should have_valid(:email).when() }
    it { should_not have_valid(:email).when() }
  end
  
  describe "receive email" do
    it { should have_valid(:receive_email).when() }
    it { should_not have_valid(:receive_email).when() }
  end
  
  describe "login" do
    it { should have_valid(:login).when() }
    it { should_not have_valid(:login).when() }
  end
  
  describe "password" do
    it { should have_valid(:password).when() }
    it { should_not have_valid(:password).when() }
  end
end
