# Read about factories at http://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :sector do
    factory :sector_development do
      sequence(:name) { |n| "Sector #{n}" }
      association :project,    factory: :project_finance
      association :created_by, factory: :user_adriano
    end
  end
end
