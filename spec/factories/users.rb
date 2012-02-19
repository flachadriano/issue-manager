# Read about factories at http://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    factory :user_adriano do
      sequence(:name) { |n| "Adriano #{n}" }
      sequence(:email) { |n| "adriano_#{n}@email.com" }
      receive_email true
      sequence(:login) { |n| "adriano_#{n}" }
      password "123456"
    end
  end
end
