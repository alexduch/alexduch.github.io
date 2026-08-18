#!/bin/bash -e

lang=$1

if [[ "$lang" != "en" && "$lang" != "fr" ]]; then 
  lang="fr"
fi

cat ../data/$lang.json | jq --from-file ./to_cv_smithing.jq | yq -P