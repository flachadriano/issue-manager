# Read about factories at http://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :project do
    factory :project_finance do
      sequence(:name) { |n| "Finance #{n}" }
      association :created_by, factory: :user_adriano
    end
  end
end
