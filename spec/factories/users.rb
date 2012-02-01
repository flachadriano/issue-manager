# Read about factories at http://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    factory :user_adriano do
      sequence(:name) { |n| "Adriano #{n}" }
      receive_email false
      sequence(:login) { |n| "adriano_#{n}" }
      password "123"
    end
  end
end
