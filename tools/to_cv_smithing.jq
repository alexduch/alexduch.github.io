{
  "profil": { 
    "pitch": .about | join("\n"),
    "diplomes": [ .education[] | .training + ", " + .school + ", " + .dates ],
    "competences_logicielles": .skills | keys_unsorted
  },
  "missions": [
    .xp[] | {
      "client": .company,
      "duree": .dates,
      "poste": .position,
      "description": .context,
      "travaux": .tasks,
      "environnement": .env | keys_unsorted
    }
  ]
}