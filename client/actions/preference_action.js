export const changeTime = (timeChosen) => ({
  type: 'CHANGE_TIME',
  timeChosen
})

export const changePrice = (priceChosen) => ({
  type: 'CHANGE_PRICE',
  priceChosen
})

export const changeNeighborhood = (neighborhoodChosen) => ({
  type:'CHANGE_NEIGHBORHOOD',
  neighborhoodChosen
})

export const changeCuisine = (cuisineChosen) => ({
  type: 'CHANGE_CUISINE',
  cuisineChosen
})
