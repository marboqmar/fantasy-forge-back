import { ItemDetailsModel } from "./models/index.js";

const ITEM_LIST: ItemDetailsModel[] = [
  {
    key: 1,
    name: "Espada del caballero imputrescible",
    nameEn: "Cleanrot knights sword",
    img: "/swords/cleanrot-knights-sword.png",
    img2: "/swords/blacksmiths-will.png",
    price: 250,
    description1:
      "Espada perforante de los caballeros imputrescibles que lucharon junto a Malenia, espada de Miquella. Esta espada es un testimonio del poder antiguo y la elegancia oscura. Su hoja es impecablemente recta, afinándose hasta una punta terriblemente afilada, diseñada para penetrar las defensas más formidables. La artesanía de la espada es inigualable, combinando arte con funcionalidad letal.",
    description2:
      "Las leyendas hablan de la capacidad de la espada para absorber las sombras que la rodean, envolviendo a su portador en un aura de invisibilidad y silencio, convirtiéndolo en un fantasma en el campo de batalla. Aquellos que se atreven a empuñarla deben poseer no solo fuerza, sino también la sabiduría para aprovechar su oscuro potencial, pues es una hoja que elige a su maestro tanto como es elegida.",
    descriptionEn1:
      "Piercing sword of the cleanrot knights who fought alongside Malenia, blade of Miquella. This sword stands as a testament to ancient power and dark elegance. Its blade is flawlessly straight, tapering to a wickedly sharp point designed to penetrate the most formidable defenses. The craftsmanship of the sword is unrivaled, blending artistry with lethal functionality.",
    descriptionEn2:
      "Legends speak of the sword's ability to absorb the very shadows around it, cloaking its bearer in an aura of invisibility and silence, making them a phantom on the battlefield. Those who dare to wield it must possess not only strength but also the wisdom to harness its dark potential, for it is a blade that chooses its master as much as it is chosen.",
    origin: "Elden Ring",
  },
  {
    key: 2,
    name: "La voluntad del herrero",
    nameEn: `Blacksmith’s will`,
    img: "/swords/blacksmiths-will.png",
    img2: "/swords/cleanrot-knights-sword.png",
    price: 450,
    description1:
      "Esta espada, conocida como La voluntad del herrero, es un arma de poder extraordinario y belleza hipnotizante, forjada en el corazón de un volcán dormido. La hoja es una maravilla, creada a partir de la esencia misma del fuego. Brilla con un intenso tono ardiente, como si lava fundida fluyera a través de su núcleo, irradiando calor y luz en un ritmo pulsante.",
    description2:
      "La hoja está inscrita con runas antiguas que fluctuan y bailan como llamas, cuyos significados se han perdido en el tiempo pero cuyo poder es innegable. Se dice que estas runas atan el espíritu de un elemental de fuego, infundiendo a la espada con su naturaleza ardiente e implacable furia. Los bordes de la hoja son increíblemente afilados, capaces de cortar los materiales más duros con facilidad, mientras que la cresta central brilla con una feroz luz roja-anaranjada, insinuando el calor abrasador contenido en su interior.",
    descriptionEn1:
      "This sword, known as Blacksmith’s will, is a weapon of extraordinary power and mesmerizing beauty, forged in the heart of a dormant volcano. The blade itself is a marvel, crafted from the very essence of fire. It glows with an intense, fiery hue, as if molten lava courses through its core, radiating heat and light in a pulsating rhythm.",
    descriptionEn2:
      "The blade is inscribed with ancient runes that flicker and dance like flames, their meanings lost to time but their power undeniable. These runes are said to bind the spirit of a fire elemental, imbuing the sword with its fiery nature and unrelenting wrath. The edges of the blade are razor-sharp, capable of cutting through the toughest materials with ease, while the central ridge glows with a fierce orange-red light, hinting at the searing heat contained within.",
    origin: "Dungeons & Dragons",
  },
  {
    key: 3,
    name: "Ala de Aestel",
    nameEn: "Wing of Aestel",
    img: "/swords/wing-of-aester.png",
    img2: "/swords/anduril.png",
    price: 499,
    description1:
      "Esta espada es diferente a cualquier otra, una obra maestra nacida de los huesos de un ala frágil, el corazón de una estrella caída y una reliquia del Nacido del Vacío que se dice asaltó la Ciudad Eterna. Su hoja, iridiscente y brillante con un espectro de colores, parece casi líquida, fluyendo y cambiando como si estuviera viva.",
    description2:
      "La forma de la espada es elegante pero feroz, con una ligera curva que sugiere tanto gracia como precisión letal, y su punta es capaz de perforar las armaduras más fuertes. Este arma no está simplemente forjada, sino que está creada con propósito y destino, destinada a ser empuñada por un héroe incomparable.",
    descriptionEn1:
      "This sword is unlike any other, a masterpiece born from the bones of a delicate wing, the heart of a fallen star, and a relic of the Naturalborn of the Void who is said to have assailed the Eternal City. Its blade, iridescent and shimmering with a spectrum of colors, seems almost liquid, flowing and shifting as if alive.",
    descriptionEn2:
      "The sword's form is elegant yet fierce, with a slight curve that suggests both grace and lethal precision, and its tip capable of piercing the strongest of armors. This weapon is not merely forged but crafted with purpose and destiny, destined to be wielded by a hero of unparalleled valor.",
    origin: "Elden Ring",
  },
  {
    key: 4,
    name: "Andúril",
    nameEn: "Andúril",
    img: "/swords/anduril.png",
    img2: "/swords/wing-of-aester.png",
    price: 160,
    description1:
      "Andúril, también conocida como la Llama del oeste, fue reforjada a partir de los fragmentos de Narsil, la espada de Elendil, en Rivendel. Fue entregada a Aragorn II Elessar, heredero de Isildur, por Elrond, Señor de Rivendel. La inscripción en la hoja dice “Nanye Andúril i ne Narsil i macil Elendilo. Lercuvanten i mali Mordoreo” que se traduce como “Soy Andúril, quien fue Narsil, la espada de Elendil. Que los esclavos de Mordor huyan de mí”.",
    description2:
      "La hoja es perfectamente recta, afinándose hasta una punta terriblemente afilada, diseñada para perforar las armaduras más fuertes y abatir a los enemigos más temibles. Sus bordes están afilados a la perfección, capaces de cortar acero y piedra con facilidad, mientras que la cresta central añade tanto fuerza como elegancia a su diseño.",
    descriptionEn1:
      'Andúril, also known as the Flame of the west, was reforged from the shards of Narsil, the sword of Elendil, in Rivendell. It was gifted to Aragorn II Elessar, heir of Isildur, by Elrond, Lord of Rivendell. The inscription on the blade reads “Nanye Andúril i ne Narsil i macil Elendilo. Lercuvanten i mali Mordoreo” which translates to "I am Anduril, who was Narsil, the sword of Elendil. Let the thralls of Mordor flee me".',
    descriptionEn2:
      "The blade is perfectly straight, tapering to a razor-sharp point designed to pierce the toughest of armors and strike down the most fearsome of foes. Its edges are honed to perfection, capable of slicing through steel and stone with ease, while the central ridge adds both strength and elegance to its design.",
    origin: "The Lord of the Rings",
  },
  {
    key: 5,
    name: "Espadón de la luna negra",
    nameEn: "Darkmoon greatsword",
    img: "/swords/moonlight-greatsword.png",
    img2: "/swords/cleanrot-knights-sword.png",
    price: 380,
    description1:
      "Un espadón lunar, otorgado por una reina Cariana a su esposo para honrar una tradición ancestral. El símbolo de Ranni es una luna llena, fría y plomiza, y esta espada no es más que un rayo de su luz. La hoja es ancha y elegantemente curvada, y emana un aura de poder antiguo y belleza etérea.",
    description2:
      "Sus intrincados patrones grabados en el metal son hipnotizantes, semejantes a enredaderas y hojas entrelazadas. Estos patrones no son meramente decorativos, palpitan con energía mágica, canalizando la fuerza vital del bosque en cada estocada. Los bordes de la hoja están afilados con una nitidez sobrenatural, capaces de cortar los materiales más duros con un susurro.",
    descriptionEn1:
      "A moon greatsword, bestowed by a Carian queen upon her spouse to honor long-standing tradition. Ranni's sigil is a full moon, cold and leaden, and this sword is but a beam of its light. The blade is wide and elegantly curved, and emanates an aura of ancient power and ethereal beauty.",
    descriptionEn2:
      "Its intricate patterns etched into the metal are mesmerizing, resembling vines and leaves intertwined. These patterns are not merely decorative, they pulse with magical energy, channeling the life force of the forest into every strike. The edges of the blade are honed to an otherworldly sharpness, capable of cutting through the toughest of materials with a whisper.",
    origin: "Elden Ring",
  },
  {
    key: 6,
    name: "Espada del caballero imputrescible 2",
    nameEn: "Cleanrot knights sword 2",
    img: "/swords/cleanrot-knights-sword.png",
    img2: "/swords/blacksmiths-will.png",
    price: 205,
    description1: "Esta es una espada maravillosa",
    description2: "Esta es una espada maravillosa",
    descriptionEn1: "This is an awesome sword",
    descriptionEn2: "This is an awesome sword",
    origin: "Elden Ring",
  },
  {
    key: 7,
    name: "La voluntad del herrero 2",
    nameEn: `Blacksmith’s will 2`,
    img: "/swords/blacksmiths-will.png",
    img2: "/swords/cleanrot-knights-sword.png",
    price: 305,
    description1: "Esta es una espada maravillosa",
    description2: "Esta es una espada maravillosa",
    descriptionEn1: "This is an awesome sword",
    descriptionEn2: "This is an awesome sword",
    origin: "Dungeons & Dragons",
  },
  {
    key: 8,
    name: "Ala de Aestel 2",
    nameEn: "Wing of Aestel 2",
    img: "/swords/wing-of-aester.png",
    img2: "/swords/anduril.png",
    price: 405,
    description1: "Esta es una espada maravillosa",
    description2: "Esta es una espada maravillosa",
    descriptionEn1: "This is an awesome sword",
    descriptionEn2: "This is an awesome sword",
    origin: "Elden Ring",
  },
  {
    key: 9,
    name: "Anduril 2",
    nameEn: "Anduril 2",
    img: "/swords/anduril.png",
    img2: "/swords/wing-of-aester.png",
    price: 95,
    description1: "Esta es una espada maravillosa",
    description2: "Esta es una espada maravillosa",
    descriptionEn1: "This is an awesome sword",
    descriptionEn2: "This is an awesome sword",
    origin: "The Lord of the Rings",
  },
  {
    key: 10,
    name: "Espadón de la luna negra 2",
    nameEn: "Darkmoon greatsword 2",
    img: "/swords/moonlight-greatsword.png",
    img2: "/swords/cleanrot-knights-sword.png",
    price: 105,
    description1: "Esta es una espada maravillosa",
    description2: "Esta es una espada maravillosa",
    descriptionEn1: "This is an awesome sword",
    descriptionEn2: "This is an awesome sword",
    origin: "Elden Ring",
  },
];

export default ITEM_LIST;
