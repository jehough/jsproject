class Api::ApiController < ActionController::Base
  include ActionController::ImplicitRender
  respond_to :json
  protect_from_forgery with: :null_session
  before_action :destroy_session
  private
  def destroy_session
    request.session_options[:skip] = true
  end
end
