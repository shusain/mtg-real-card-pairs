# mtg-real-card-pairs

See output at:

https://shusain.github.io/mtg-real-card-pairs/

Inspired by code from a friend playing with some AI LLMs.  The page generated here in HTML and corresponding JSON data was produced by the model.  Some of the images put in the original code used wrong paths so this repo contains a scripted solution to match up the cards from JSON dumps from scryfall with the names of the cards from the [orig-data.json](cli/orig-data.json) and generates the [card-data.json](cli/card-data.json) as output.

To run the script edit the orig-data.json then run:

```
# Get scryfall data setup
mkdir cli/scryfall-data
wget https://data.scryfall.io/default-cards/default-cards-20250402215416.json -P cli/scryfall-data

# Edit the cli/orig-data.json for card names you want to look-up images for then run:

npm install --prefix cli                  # Install script dependencies
npm start --prefix cli > card-data.json   # Write the new image paths out
npx http-server                           # Run a web server temporarily in the dev folder
xdg-open http://127.0.0.1:8080/mtg2.html  # Open with default app on Linux or go here in browser however
```
