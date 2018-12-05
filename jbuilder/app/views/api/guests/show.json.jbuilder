json.name @guest.name
json.age @guest.age 
json.favorite_color @guest.favorite_color
json.gifts do
  json.array! @guest.gifts, :title, :description
end

