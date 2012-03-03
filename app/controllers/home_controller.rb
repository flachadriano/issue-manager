class HomeController < ApplicationController
	def index
		render text: {success: true}.to_json
	end
end