class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.references  :creator, :photo
      t.string      :name
      t.string      :description
      t.boolean     :published, :default => false
      t.timestamps
    end
  end
end
