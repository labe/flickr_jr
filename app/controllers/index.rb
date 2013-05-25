get '/' do
  #login
  #browse albums? search for photos? wooooo
  #create an album
  erb :index
end

get '/login' do
  #log into existing account
  #or create a new account
end

get '/users/new' do
  #create new account
end

get '/albums/new' do
  #create new album
  #upload photo to add to album
end

post '/albums/publish' do
  params.each { |_, file| Photo.create(:file => file) }
  erb :album  # eventually needs to redirect to the album view page 
end

get '/:username/albums/:album_id' do
  #shows album + all photos if published, else redirects to error
  erb :album
end

get '/:username/albums/:album_id/edit' do
  #allows user to add more photos to an album, delete album, edit photo/album name/desc
end




