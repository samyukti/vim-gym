# encoding: utf-8
class SinatraApp < Sinatra::Application
  get "/" do
    haml :main
  end

  get "/emi" do
    content_type :json
    { payment: Amortizer::Loan.new(params[:principal], params[:rate], params[:term]).payment }.to_json
  end
end
