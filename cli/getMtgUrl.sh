#! /bin/bash

# This tiny script depends on having the JSON card data from scryfall downloaded ahead of use
# to make a folder to store the JSON and fetch the file:

# mkdir scryfall-data
# cd scryfall-data
# wget https://data.scryfall.io/default-cards/default-cards-20250402215416.json

# See https://scryfall.com/docs/api/bulk-data for updated data dump URLs

# -m1 getting only first match with grep for a given card name
string=$(cat scryfall-data/default-cards-20250402215416.json | grep -m1 "$1")

# stripping comma for valid JSON parsing of the card entry, grabbing normal size image path for the card
echo ${string::-1} | jq -r -j ".image_uris.normal"

# cat default-cards-20250402215416.json | grep "$1" | jq ".image_uris.normal"