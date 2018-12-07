json.set! @pokemon.id do
  json.extract! @pokemon, :id, :name, :attack, :defense
  json.moves do 
    json.array! @pokemon.moves
  end
  json.poke_type @pokemon.poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.item_ids do 
    json.array! @pokemon.items.ids
  end

end 


