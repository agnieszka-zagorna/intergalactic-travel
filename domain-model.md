# Domain Model

| Component/Service        | Methods                                      | Scenario                                           | Outcome                                                 |
|--------------------------|----------------------------------------------|----------------------------------------------------|---------------------------------------------------------|
| TravelService            | fetchPlanets(): Promise<Planet[]>            | Fetches planets data from API                      | Returns a Promise containing array with data of planets |
|                          | addPlanetToChosen(planet: Planet)            | Adds a planet to the cart                          | Planet is displayed in cart                             |
| DestinationsComponent    | addPlanet(planet: Planet)                    | Adds a planet to the cart                          | Planet is displayed in cart                             |
|                          | filterByClimate(selectedClimate: string)     | Filters planets by selected climate                | Displays planets only with the selected climate         |
|                          | sortAlphabetically()                         | Sorts planets alphabetically                       | Displays planets in alphabetical order (by names)       |
| DataformComponent        | submit(event: Event)                         | Handles form submission                            |                                                         |
| ChosenComponent          |                                              |                                                    |                                                         |