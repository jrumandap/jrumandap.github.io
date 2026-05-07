const characters = [
  {
    id: 1,
    name: "Goku",
    ki: "60,000,000",
    maxKi: "90 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Kakarot, now known as Son Goku, would become the prince consort of Mount Fry-pan and leader of the Z Fightersas well as the greatest defender of Earth and Universe 7, managing to keep them safe from destruction on countless occasions, despite not considering himself a hero or savior.",
    image: "https://dragonball-api.com/characters/goku_normal.webp",
    affiliation: "Z Fighters",

    transformations: [
      {
        id: 1,
        name: "Super Saiyan",
        image: "https://dragonball-api.com/transformaciones/goku_ssj.webp",
        ki: "3 Billion",
      },
      {
        id: 2,
        name: "Super Saiyan 2",
        image: "https://dragonball-api.com/transformaciones/goku_ssj2.webp",
        ki: "6 Billion",
      },
      {
        id: 3,
        name: "Super Saiyan 3",
        image: "https://dragonball-api.com/transformaciones/goku_ssj3.webp",
        ki: "24 Billion",
      },
      {
        id: 4,
        name: "Super Saiyan 4",
        image: "https://dragonball-api.com/transformaciones/goku_ssj4.webp",
        ki: "2 Quadrillion",
      },
      {
        id: 5,
        name: "Super Saiyan Blue",
        image: "https://dragonball-api.com/transformaciones/goku_ssjb.webp",
        ki: "9 Quintillion",
      },
      {
        id: 6,
        name: "Ultra Instinct",
        image: "https://dragonball-api.com/transformaciones/goku_ultra.webp",
        ki: "90 Septillion",
      }
    ]
  },

  {
    id: 2,
    name: "Vegeta",
    ki: "54.000.000",
    maxKi: "19.84 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Prince of the Saiyans, initially a villain, but later joins the Z Fighters. Although at the beginning of Dragon Ball Z, Vegeta plays an antagonistic role, shortly after he decides to rebel against Freeza's Empire, becoming a key ally for the Z Warriors.",
    image: "https://dragonball-api.com/characters/vegeta_normal.webp",
    affiliation: "Z Fighters",

    transformations: [
      {
        id: 7,
        name: "Super Saiyan",
        image: "https://dragonball-api.com/transformaciones/vegeta%20SSJ%20(2).webp",
        ki: "330,000,000",
      },
      {
        id: 8,
        name: "Super Saiyan 2",
        image: "https://dragonball-api.com/transformaciones/vegeta%20SSJ2.webp",
        ki: "24 Billion",
      },
      {
        id: 9,
        name: "Super Saiyan 4",
        image: "https://dragonball-api.com/transformaciones/vegeta%20ssj4.webp",
        ki: "1.8 Trillion",
      },
      {
        id: 10,
        name: "Super Saiyan Blue",
        image: "https://dragonball-api.com/transformaciones/vegeta%20SSJB.webp",
        ki: "100 Quintillion",
      },
      {
        id: 11,
        name: "Ultra Ego (Mega Instinct Evil)",
        image: "https://dragonball-api.com/transformaciones/vegeta%20mega%20instinto.webp",
        ki: "19.84 Septillion",
      }
    ]
  },

  {
    id: 3,
    name: "Piccolo",
    ki: "2.000.000",
    maxKi: "500.000.000",
    race: "Namekian",
    gender: "Male",
    description: "He is a Namekian who emerged after being created in the last moments of his father's life, being his current reincarnation. Although he was initially Son Goku's archenemy, as time went by he became less evil until he finally became a kind being and member of the Z Fighters.",
    image: "https://dragonball-api.com/characters/picolo_normal.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 12,
        name: "Piccolo Super Namekian",
        image: "https://dragonball-api.com/transformaciones/Piccolo super namekiano.webp",
        ki: "2.175 Billion",
      },
      {
        id: 13,
        name: "Piccolo Orange",
        image: "https://dragonball-api.com/transformaciones/picolo orange.webp",
        ki: "41.25 Quintillion",
      }
    ]
  },

  {
    id: 4,
    name: "Bulma",
    ki: "0",
    maxKi: "0",
    race: "Human",
    gender: "Female",
    description: "Bulma is the female protagonist of the Dragon Ball manga series and its anime adaptations Dragon Ball, Dragon Ball Z, Dragon Ball Super and Dragon Ball GT. She is the daughter of Dr. Brief and his wife Panchy, younger sister of Tights and a great friend of Son Goku with whom she begins the search for the Dragon Balls. In Dragon Ball Z she had Trunks, the first-born of her husband Vegeta, her daughter Bra and her adult alternate-time son Trunks from the Future.",
    image: "https://dragonball-api.com/characters/bulma.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 5,
    name: "Frieza",
    ki: "530,000",
    maxKi: "52.71 Septillion",
    race: "Frieza Race",
    gender: "Male",
    description: "Frieza is a ruthless space tyrant and the leader of the Frieza Force. He became one of the greatest enemies of Goku and the Z Fighters across the universe.",
    image: "https://dragonball-api.com/characters/Freezer.webp",
    affiliation: "Army of Frieza",

    transformations: [
      {
        id: 14,
        name: "Freezer 2nd Form",
        image: "https://dragonball-api.com/transformaciones/freezer 2nd form.webp",
        ki: "1,060,000",
      },
      {
        id: 15,
        name: "Freezer 3rd Form",
        image: "https://dragonball-api.com/transformaciones/Freezer_3.webp",
        ki: "2,120,000",
      },
      {
        id: 16,
        name: "Freezer Perfect Form",
        image: "https://dragonball-api.com/transformaciones/render_freezer_perfect_form_by_poh2000-d4n0ewd.webp",
        ki: "60,000,000",
      },
      {
        id: 17,
        name: "Freezer Perfect Form (Golden)",
        image: "https://dragonball-api.com/transformaciones/freezer_gold.webp",
        ki: "100 Quintillion",
      }
    ]
  },

  {
    id: 6,
    name: "Zarbon",
    ki: "20,000",
    maxKi: "30,000",
    race: "Frieza Race",
    gender: "Male",
    description: "Zarbon is one of Frieza's elite warriors and a loyal member of the Frieza Force. He is known for his beauty, strength, and powerful monster transformation.",
    image: "https://dragonball-api.com/characters/zarbon.webp",
    affiliation: "Army of Frieza",

    transformations: [
      {
        id: 18,
        name: "Zarbon Monster",
        image: "https://dragonball-api.com/transformaciones/zarbon monster.webp",
        ki: "30,000",
      }
    ]
  },

  {
    id: 7,
    name: "Dodoria",
    ki: "18,000",
    maxKi: "20,000",
    race: "Frieza Race",
    description: "Dodoria is one of Frieza's brutal soldiers and a feared warrior in the Frieza Force. He is known for his violent personality and overwhelming strength during the Namek Saga.",
    image: "https://dragonball-api.com/characters/dodoria.webp",
    affiliation: "Army of Frieza",

    transformations: []
  },

  {
    id: 8,
    name: "Ginyu",
    ki: "9,000",
    maxKi: "25,000",
    race: "Frieza Race",
    gender: "Male",
    description: "Ginyu is the captain of the elite Ginyu Force and one of Frieza's most trusted commanders. He is famous for his unique body-switching technique and dramatic battle poses.",
    image: "https://dragonball-api.com/characters/ginyu.webp",
    affiliation: "Army of Frieza",

    transformations: []
  },

  {
    id: 9,
    name: "Cell",
    ki: "250,000,000",
    maxKi: "5 Billion",
    race: "Android",
    gender: "Male",
    description: "Cell is a bio-android created by Dr. Gero to destroy Goku and achieve ultimate perfection. He became one of the deadliest enemies of the Z Fighters during the Android and Cell Saga.",
    image: "https://dragonball-api.com/characters/celula.webp",
    affiliation: "Freelancer",

    transformations: [
      {
        id: 19,
        name: "Imperfect Form",
        image: "https://dragonball-api.com/transformaciones/cell imperfect.webp",
        ki: "370,000,000",
      },
      {
        id: 20,
        name: "Semi Perfect Form",
        image: "https://dragonball-api.com/transformaciones/Semi-Perfect_Cell.webp",
        ki: "897,000,000",
      },
      {
        id: 21,
        name: "Super Perfect Form",
        image: "https://dragonball-api.com/transformaciones/cell perfect.webp",
        ki: "10,970,000,000",
      }
    ]
  },

  {
    id: 10,
    name: "Gohan",
    ki: "45,000,000",
    maxKi: "40 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Gohan is the first son of Goku and one of the strongest hybrid Saiyans in the universe. He fights alongside the Z Fighters and unlocks incredible power through his hidden potential.",
    image: "https://dragonball-api.com/characters/gohan.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 22,
        name: "Gohan SSJ",
        image: "https://dragonball-api.com/transformaciones/gohan_ssj-removebg-preview.webp",
        ki: "4,700,000,000",
      },
      {
        id: 23,
        name: "Gohan SSJ2",
        image: "https://dragonball-api.com/transformaciones/Gohan_joven_ssj2.webp",
        ki: "10,200,000,000",
      },
      {
        id: 24,
        name: "Gohan Ultimate",
        image: "https://dragonball-api.com/transformaciones/gohan_ultimate.webp",
        ki: "43,000,000,000",
      },
      {
        id: 25,
        name: "Gohan Beast",
        image: "https://dragonball-api.com/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp",
        ki: "25.6 Septillion",
      }
    ]
  },

  {
    id: 11,
    name: "Krillin",
    ki: "1,000,000",
    maxKi: "1 Billion",
    race: "Human",
    gender: "Male",
    description: "Krillin is Goku's best friend and one of the bravest warriors among the Z Fighters. Despite being human, he fights powerful enemies and protects Earth alongside his allies.",
    image: "https://dragonball-api.com/characters/Krilin_Universo7.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 12,
    name: "Tenshinhan",
    ki: "2,400,000",
    maxKi: "80,000,000",
    race: "Human",
    gender: "Male",
    description: "Tenshinhan is a disciplined martial artist and a loyal member of the Z Fighters. He is known for his powerful techniques, intense training, and strong sense of honor.",
    image: "https://dragonball-api.com/characters/Tenshinhan_Universo7.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 13,
    name: "Yamcha",
    ki: "1,980,000",
    maxKi: "4,000,000",
    race: "Human",
    gender: "Male",
    description: "Yamcha is a former desert bandit who later became a trusted member of the Z Fighters. He is known for his martial arts skills and loyal friendship with Goku and the team.",
    image: "https://dragonball-api.com/characters/Final_Yamcha.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 14,
    name: "Chi-Chi",
    ki: "0",
    maxKi: "0",
    race: "Human",
    gender: "Female",
    description: "Chi-Chi is the wife of Goku and the loving mother of Gohan and Goten. She is known for her strict personality and deep care for her family.",
    image: "https://dragonball-api.com/characters/ChiChi_DBS.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 15,
    name: "Gotenks",
    ki: "65,600,000",
    maxKi: "34.8 Billion",
    race: "Saiyan",
    gender: "Male",
    description: "Gotenks is the fusion of Goten and Trunks created through the Fusion Dance. He combines incredible power with a playful and overconfident personality.",
    image: "https://dragonball-api.com/characters/Gotenks_Artwork.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 30,
        name: "Gotenks SSJ",
        image: "https://dragonball-api.com/transformaciones/gotenks ssj.webp",
        ki: "5.7 Billion",
      },
      {
        id: 31,
        name: "Gotenks SSJ3",
        image: "https://dragonball-api.com/transformaciones/Gotenks_SSJ3.webp",
        ki: "45.6 Billion",
      }
    ]
  },

  {
    id: 16,
    name: "Trunks",
    ki: "50,000,000",
    maxKi: "37.4 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Trunks is the son of Vegeta and Bulma and one of the strongest young Saiyans on Earth. He fights alongside the Z Fighters and is known for his courage and powerful transformations.",
    image: "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 26,
        name: "SSJ Trunks",
        image: "https://dragonball-api.com/transformaciones/trunks_ssj-removebg-preview.webp",
        ki: "905,000,000",
      },
      {
        id: 27,
        name: "SSJ2 Trunks",
        image: "https://dragonball-api.com/transformaciones/trunks ssj2.webp",
        ki: "18,000,000,000",
      },
      {
        id: 28,
        name: "Trunks SSJ3",
        image: "https://dragonball-api.com/transformaciones/trunks ssj3.webp",
        ki: "1.25 Billion",
      },
      {
        id: 29,
        name: "Trunks Rage",
        image: "https://dragonball-api.com/transformaciones/trunks ssj iracundo.webp",
        ki: "17.5 Quintillion",
      }
    ]
  },

  {
    id: 17,
    name: "Master Roshi",
    ki: "500,000",
    maxKi: "350,000,000",
    race: "Human",
    description: "Master Roshi is a legendary martial arts master and Goku’s mentor. He is known as the God of Martial Arts and one of the strongest early Earth fighters.",
    image: "https://dragonball-api.com/characters/roshi.webp",
    affiliation: "Z Fighter",
    transformations: []
  },

  {
    id: 18,
    name: "Bardock",
    ki: "450,000",
    maxKi: "180,000,000",
    race: "Saiyan",
    gender: "Male",
    description: "Bardock is a low-class Saiyan warrior and the father of Goku. He fought against Frieza’s forces and tried to protect his race from destruction.",
    image: "https://dragonball-api.com/characters/Bardock_Artwork.webp",
    affiliation: "Z Fighter",
    transformations: []
  },

  {
    id: 19,
    name: "Launch",
    ki: "0",
    maxKi: "0",
    race: "Human",
    gender: "Female",
    description: "Launch is a woman with a split personality that changes whenever she sneezes. She is a supporting character in the Dragon Ball series.",
    image: "https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp",
    affiliation: "Z Fighter",
    transformations: []
  },

  {
    id: 20,
    name: "Mr. Satan",
    ki: "450",
    maxKi: "5,000",
    race: "Human",
    gender: "Male",
    description: "Mr. Satan is a famous martial artist who is known for taking credit for the Z Fighters' victories. He is Earth’s public champion.",
    image: "https://dragonball-api.com/characters/Mr_Satan_DBSuper.webp",
    affiliation: "Other",
    transformations: []
  },

  {
    id: 21,
    name: "Dende",
    ki: "3,200",
    maxKi: "3,200",
    race: "Namekian",
    gender: "Male",
    description: "Dende is a young Namekian who became the Guardian of Earth after Kami. He helps the Z Fighters by maintaining the Dragon Balls.",
    image: "https://dragonball-api.com/characters/Dende_Artwork.webp",
    affiliation: "Z Fighter",
    transformations: []
  },

  {
    id: 22,
    name: "Android 17",
    ki: "320,000,000",
    maxKi: "40 Quintillion",
    race: "Android",
    gender: "Female",
    description: "Android 17 is a powerful android created by Dr. Gero. He later becomes a protector of nature and a member of Universe 7’s fighters.",
    image: "https://dragonball-api.com/characters/17_Artwork.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 23,
    name: "Android 16",
    ki: "440,000,000",
    maxKi: "440,000,000",
    race: "Android",
    gender: "Male",
    description: "Android 16 is a peaceful android who loves nature and life. He plays a key role during the Cell Saga.",
    image: "https://dragonball-api.com/characters/Androide_16.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 24,
    name: "Android 19",
    ki: "122,000,000",
    maxKi: "160,000,000",
    race: "Android",
    gender: "Male",
    description: "Android 19 is one of Dr. Gero’s creations designed to absorb energy and fight the Z Fighters.",
    image: "https://dragonball-api.com/characters/Android19.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 25,
    name: "Android 20 (Dr. Gero)",
    ki: "128,000,000",
    maxKi: "158,100,000",
    race: "Android",
    gender: "Male",
    description: "Dr. Gero is a mad scientist who created Androids 17, 18, and 19. He later turns himself into Android 20 to continue his revenge against Goku.",
    image: "https://dragonball-api.com/characters/Dr._Gero%20nadroide%2020.webp",
    affiliation: "Villain",

    transformations: []
  },

  {
    id: 26,
    name: "Android 13",
    ki: "195,000,000",
    maxKi: "562,500,000",
    race: "Android",
    gender: "Male",
    description: "Android 13 is a powerful android from the movie The Return of Cooler. He becomes stronger after absorbing other android components.",
    image: "https://dragonball-api.com/characters/Androide13normal.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 27,
    name: "Android 14",
    ki: "192,500,000",
    maxKi: "192,500,000",
    race: "Android",
    gender: "Male",
    description: "Android 14 is another android that appears in the same movie as Android 13.",
    image: "https://dragonball-api.com/characters/14Dokkan.webp",
    affiliation: "Villain",

    transformations: []
  },

  {
    id: 28,
    name: "Android 15",
    ki: "175,000,000",
    maxKi: "175,000,000",
    race: "Android",
    gender: "Male",
    description: "Android 15 is a movie-exclusive android who appears alongside Android 13 in The Return of Cooler.",
    image: "https://dragonball-api.com/characters/15Dokkan.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 29,
    name: "Nail",
    ki: "42,000",
    maxKi: "42,000",
    race: "Namekian",
    gender: "Male",
    description: "Nail is a powerful Namekian warrior and the strongest member of the warrior caste on Planet Namek. He serves as guardian of Guru.",
    image: "https://dragonball-api.com/characters/Nail_Artwork.webp",
    affiliation: "Z Fighter",
    transformations: []
  },

  {
    id: 30,
    name: "Raditz",
    ki: "1,500",
    maxKi: "1,500",
    race: "Saiyan",
    gender: "Male",
    description: "Raditz is the older brother of Goku and the first Saiyan enemy in Dragon Ball Z. He arrives on Earth to recruit Goku into the Saiyan army.",
    image: "https://dragonball-api.com/characters/Raditz_artwork_Dokkan.webp",
    affiliation: "Army of Frieza",
    transformations: []
  },

  {
    id: 31,
    name: "Babidi",
    ki: "0",
    maxKi: "0",
    race: "Majin",
    gender: "Male",
    description: "Babidi is a powerful wizard and son of Bibbidi. He specializes in mind control magic and awakens Majin Buu.",
    image: "https://dragonball-api.com/characters/Babidi_Artwork.webp",
    affiliation: "Villain",
    transformations: []
  },

  {
    id: 32,
    name: "Majin Buu",
    ki: "8 Billion",
    maxKi: "100 Trillion",
    race: "Majin",
    gender: "Male",
    description: "Majin Buu is a magical being created by the wizard Bibbidi. He has multiple forms and immense destructive power.",
    image: "https://dragonball-api.com/characters/BuuGordo_Universo7.webp",
    affiliation: "Villain",
    transformations: [
      {
        id: 32,
        name: "Super Buu",
        image: "https://dragonball-api.com/transformaciones/Super_Buu_Artwork.webp",
        ki: "5,670,000,000"
      },
      {
        id: 33,
        name: "Majin Buu (Gotenks)",
        image: "https://dragonball-api.com/transformaciones/Gotenks-Buu-removebg-preview.webp",
        ki: "12,300,000,000"
      },
      {
        id: 34,
        name: "Majin Buu (Gohan)",
        image: "https://dragonball-api.com/transformaciones/Super_Buu_Gohan_Absorbido.webp",
        ki: "14,800,000,000"
      },
      {
        id: 35,
        name: "Majin Buu (Pure)",
        image: "https://dragonball-api.com/transformaciones/majin buu pure.webp",
        ki: "4,000,000,000"
      }
    ]
  },

  {
    id: 33,
    name: "Beerus",
    ki: "102 Billion",
    maxKi: "100 Septillion",
    race: "God",
    gender: "Male",
    description: "Beerus is the God of Destruction of Universe 7. He maintains balance by destroying planets and is one of the strongest gods in existence.",
    image: "https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp",
    affiliation: "Other",
    transformations: []
  },

  {
    id: 34,
    name: "Whis",
    ki: "15 Septillion",
    maxKi: "110 Septillion",
    race: "Angel",
    gender: "Male",
    description: "Whis is an angel who serves as Beerus’ attendant and martial arts teacher. He is far stronger than most gods of destruction.",
    image: "https://dragonball-api.com/characters/Whis_DBS_Broly_Artwork.webp",
    affiliation: "Assistant of Beerus",
    transformations: []
  },

  {
    id: 35,
    name: "Zeno",
    ki: "500 Septillion",
    maxKi: "500 Septillion",
    race: "Unknown",
    gender: "Male",
    description: "Zeno is the supreme ruler of all universes. Despite his childlike appearance, he has the power to erase entire universes instantly.",
    image: "https://dragonball-api.com/characters/Zeno_Artwork.webp",
    affiliation: "Other",
    transformations: []
  },

  {
    id: 37,
    name: "Kibito-Shin",
    ki: "3.2 Billion",
    maxKi: "3.2 Billion",
    race: "God",
    gender: "Male",
    description: "Kibito-Shin is the fusion of Kibito and Supreme Kai using the Potara earrings. They were later separated by the Dragon Balls.",
    image: "https://dragonball-api.com/characters/Kibito_shin_Artwork.webp",
    affiliation: "Other",
    transformations: []
  },

  {
    id: 38,
    name: "Jiren",
    ki: "121 Quintillion",
    maxKi: "12.1 Septillion",
    race: "Jiren Race",
    gender: "Male",
    description: "Jiren is one of the strongest fighters in Universe 11 and a member of the Pride Troopers. He is known for his overwhelming power.",
    image: "https://dragonball-api.com/characters/Jiren.webp",
    affiliation: "Pride Troopers",
    transformations: []
  },

  {
    id: 39,
    name: "Toppo",
    ki: "99 Quadrillion",
    maxKi: "7.5 Sextillion",
    race: "God",
    gender: "Male",
    description: "Toppo is the leader of the Pride Troopers and a candidate for God of Destruction in Universe 11.",
    image: "https://dragonball-api.com/characters/Toppo.webp",
    affiliation: "Pride Troopers",
    transformations: []
  },

  {
    id: 40,
    name: "Dyspo",
    ki: "50 Trillion",
    maxKi: "150 Quintillion",
    race: "God",
    gender: "Male",
    description: "Dyspo is a member of the Pride Troopers known for his incredible speed in Universe 11.",
    image: "https://dragonball-api.com/characters/Dispo_render.webp",
    affiliation: "Pride Troopers",
    transformations: []
  },

  {
    id: 42,
    name: "Marcarita",
    ki: "10 septillion",
    maxKi: "99.5 septillion",
    race: "Angel",
    gender: "Female",
    description: "Marcarita is the guiding angel of Universe 11 and martial arts teacher of God of Destruction Vermoud.",
    image: "https://dragonball-api.com/characters/Marcarita.webp",
    affiliation: "Assistant of Vermoud",

    transformations: []
  },

  {
    id: 43,
    name: "Vermoud",
    ki: "9.9 Septillion",
    maxKi: "100 Septillion",
    race: "God",
    gender: "Male",
    description: "God of Destruction of Universe 11 who maintains balance through destruction.",
    image: "https://dragonball-api.com/characters/Vermoud.webp",
    affiliation: "Pride Troopers",

    transformations: []
  },

  {
    id: 44,
    name: "Grand Priest",
    ki: "969 Googolplex",
    maxKi: "969 Googolplex",
    race: "Angel",
    gender: "Male",
    description: "The supreme angel who serves as advisor and supervisor of Zeno.",
    image: "https://dragonball-api.com/characters/Grand priest.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 63,
    name: "North Kai (Kaito)",
    ki: "6,000",
    maxKi: "6,000",
    race: "Nucleico benigno",
    gender: "Male",
    description: "God who manages the Northern Galaxies of Universe 7.",
    image: "https://dragonball-api.com/characters/Kaio_del_Norte.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 64,
    name: "Android 18",
    ki: "280,000,000",
    maxKi: "300,000,000",
    race: "Android",
    gender: "Female",
    description: "Android created by Dr. Gero and later becomes a Z Fighter.",
    image: "https://dragonball-api.com/characters/Androide_18_Artwork.webp",
    affiliation: "Z Fighter",

    transformations: []
  },

  {
    id: 65,
    name: "Gogeta",
    ki: "250 Billion",
    maxKi: "15 septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Fusion of Goku and Vegeta using Fusion Dance.",
    image: "https://dragonball-api.com/transformaciones/gogeta.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 1,
        name: "Super Saiyan Gogeta",
        image: "https://dragonball-api.com/transformaciones/gogeta_ssj_render_2_by_ssjrose890_de2z0ra-pre.webp",
        ki: "6.3 sextillion"
      },
      {
        id: 2,
        name: "Super Saiyan 4 Gogeta",
        image: "https://dragonball-api.com/transformaciones/GOGETA SSJ4.webp",
        ki: "168 quadrillion"
      },
      {
        id: 3,
        name: "Super Saiyan Blue Gogeta",
        image: "https://dragonball-api.com/transformaciones/gogeta SSJB.webp",
        ki: "12.6 septillion"
      },
      {
        id: 4,
        name: "SSJB Evolved Gogeta",
        image: "https://dragonball-api.com/transformaciones/gogeta__bm__ssb_evolution___1__con_aura__by_ssjrose890_df682g0-fullview.webp",
        ki: "1.26 octillion"
      }
    ]
  },

  {
    id: 66,
    name: "Vegetto",
    ki: "180 Billion",
    maxKi: "10.8 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Fusion of Goku and Vegeta using Potara earrings.",
    image: "https://dragonball-api.com/transformaciones/Vegetto.webp",
    affiliation: "Z Fighter",

    transformations: [
      {
        id: 1,
        name: "Super Saiyan Vegetto",
        image: "https://dragonball-api.com/transformaciones/Vegetto.webp",
        ki: "9 Trillion"
      },
      {
        id: 2,
        name: "Super Saiyan Blue Vegetto",
        image: "https://dragonball-api.com/transformaciones/VEGITO SSJB.webp",
        ki: "10.8 Septillion"
      }
    ]
  },

  {
    id: 67,
    name: "Janemba",
    ki: "15 Billion",
    maxKi: "75 Billion",
    race: "Evil",
    gender: "Male",
    description: "Demon born from corrupted soul machine.",
    image: "https://dragonball-api.com/transformaciones/Janemba_artwork_SDBH.webp",
    affiliation: "Other",

    transformations: [
      {
        id: 1,
        name: "Super Janemba",
        image: "https://dragonball-api.com/transformaciones/Super-Janemba_artwork_SDBH.webp",
        ki: "75 Billion"
      }
    ]
  },

  {
    id: 68,
    name: "Broly",
    ki: "7 quadrillion",
    maxKi: "11.2 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Legendary Saiyan with uncontrollable power.",
    image: "https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
    affiliation: "Other",

    transformations: [
      {
        id: 1,
        name: "Super Saiyan Legendary Broly",
        image: "https://dragonball-api.com/transformaciones/Broly_Super_Saiyajin_Legendario_1.webp",
        ki: "11.2 Septillion"
      }
    ]
  },

  {
    id: 69,
    name: "Kaio del Sur",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Male",
    description: "The South Kaio is one of the Kaiō gods responsible for managing a quadrant of Universe 7. He is one of the few Kaiō shown in the manga and anime.",
    image: "https://dragonball-api.com/characters/Kaio_del_sur_cuerpo_completo.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 70,
    name: "Kaio del Este",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Female",
    description: "The Eastern Kaiō is a Kaio who enjoys training strong disciples and is known for developing fast warriors.",
    image: "https://dragonball-api.com/characters/kaio del este.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 71,
    name: "Kaio del Oeste",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Male",
    description: "The Western Kaio is the rival of the North Kaio and oversees the western galaxy sector.",
    image: "https://dragonball-api.com/characters/Kaio del oeste.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 72,
    name: "Gran Kaio",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Male",
    description: "The Great Kaio is the highest-ranking Kaio who supervises all other Kaios in the Other World.",
    image: "https://dragonball-api.com/characters/Gran_kaio_sama12.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 73,
    name: "Kaio-shin del Este",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico",
    gender: "Male",
    description: "God of Creation who protects Universe 7. He became the main Kaio-shin after the fall of others.",
    image: "https://dragonball-api.com/characters/Kaio-shin_del_este_Artwork.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 74,
    name: "Kaio-shin del Norte",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico",
    gender: "Male",
    description: "A Kaiō-shin who fought Majin Buu alongside the other Kaiō-shin 5 million years ago.",
    image: "https://dragonball-api.com/characters/Kaio-shin del norte.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 75,
    name: "Kaio-shin del Sur",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico",
    gender: "Male",
    description: "The South Kaiō-shin was the strongest among the Kaiō-shin before the ancient battle with Majin Buu.",
    image: "https://dragonball-api.com/characters/Kaio-shin_del_Sur_Dokkan.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 76,
    name: "Kaio-shin del Oeste",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Female",
    description: "A Kaiō-shin who died early during the battle against Majin Buu 5 million years ago.",
    image: "https://dragonball-api.com/characters/Kaio-shin_del_Oeste_Dokkan.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 77,
    name: "Gran Kaio-shin",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico benigno",
    gender: "Male",
    description: "The main Supreme Kai of Universe 7 who was absorbed by Majin Buu and still exists within him.",
    image: "https://dragonball-api.com/characters/Gran_Kaio-shin_Artwork.webp",
    affiliation: "Other",

    transformations: []
  },

  {
    id: 78,
    name: "Kibito",
    ki: "unknown",
    maxKi: "unknown",
    race: "Nucleico",
    gender: "Male",
    description: "Assistant and bodyguard of the Eastern Kaio-shin with healing and teleportation abilities.",
    image: "https://dragonball-api.com/characters/Kibito_Artwork.webp",
    affiliation: "Other",

    transformations: []
  },
];