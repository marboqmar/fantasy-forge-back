import { ItemDetailsModel } from "./models/index.js";

const ITEM_LIST: ItemDetailsModel[] = [
  {
    key: 1,
    name: "Espada del caballero imputrescible",
    nameEn: "Cleanrot knights sword",
    img: "/swords/cleanrot-knights-sword.png",
    img2: "/swords/cleanrot-knights-sword2.png",
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
    img2: "/swords/blacksmiths-will2.png",
    price: 450,
    description1:
      "Esta espada, conocida como la voluntad del herrero, es un arma de poder extraordinario y belleza hipnotizante, forjada en el corazón de un volcán dormido. La hoja es una maravilla, creada a partir de la esencia misma del fuego. Brilla con un intenso tono ardiente, como si lava fundida fluyera a través de su núcleo, irradiando calor y luz en un ritmo pulsante.",
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
    img2: "/swords/wing-of-aester2.png",
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
    img2: "/swords/anduril2.png",
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
    img2: "/swords/moonlight-greatsword2.png",
    price: 490,
    description1:
      "Un espadón lunar, otorgado por una reina cariana a su esposo para honrar una tradición ancestral. El símbolo de Ranni es una luna llena, fría y plomiza, y esta espada no es más que un rayo de su luz. La hoja es ancha y elegantemente curvada, y emana un aura de poder antiguo y belleza etérea.",
    description2:
      "Sus intrincados patrones grabados en el metal son hipnotizantes, semejantes a enredaderas y hojas entrelazadas. Estos patrones no son meramente decorativos, palpitan con energía mágica, canalizando la fuerza vital del bosque en cada estocada. Los bordes de la hoja están afilados con una nitidez sobrenatural, capaces de cortar los materiales más duros con un susurro.",
    descriptionEn1:
      "A moon greatsword, bestowed by a carian queen upon her spouse to honor long-standing tradition. Ranni's sigil is a full moon, cold and leaden, and this sword is but a beam of its light. The blade is wide and elegantly curved, and emanates an aura of ancient power and ethereal beauty.",
    descriptionEn2:
      "Its intricate patterns etched into the metal are mesmerizing, resembling vines and leaves intertwined. These patterns are not merely decorative, they pulse with magical energy, channeling the life force of the forest into every strike. The edges of the blade are honed to an otherworldly sharpness, capable of cutting through the toughest of materials with a whisper.",
    origin: "Elden Ring",
  },
  {
    key: 6,
    name: "Zireael",
    nameEn: "Zireael",
    img: "/swords/zireael.png",
    img2: "/swords/zireael2.png",
    price: 205,
    description1:
      "Zireael, que significa Golondrina en el idioma de los elfos Aen Seidhe, es el apodo de la espada de Ciri. Un gwyhyr (una espléndida espada gnómica, considerada la mejor del mundo) de 200 años, un tipo de hoja muy cara y preciosa que solo forjan los gnomos de Tir Tochair. La espada está hecha de hierro oscuro y la forma de la hoja se asemejaba a una llama, como es común en la tradición gnómica. En la hoja hay muchas decoraciones florales grabadas y una torre con una golondrina en la parte superior.",
    description2:
      "A finales de 1267, Esterhazy, un renombrado vendedor de espadas en la ciudad de Fano, se la regaló a Ciri cuando fue capturada por Leo Bonhart. Ciri fue entonces obligada por Bonhart a luchar con esta espada, bajo los efectos de Fisstech, en la arena de Claremont, propiedad de su primo Houvenaghel. Irónicamente, a principios del año siguiente, durante el asalto al Castillo de Stygga, Bonhart fue asesinado por Ciri con esta espada.",
    descriptionEn1:
      "Zireael, which means swallow in the language of the Aen Seidhe elves, is the nickname for Ciri's sword. A 200 year old gwyhyr (a splendid gnomish sword, regarded as the best in the world), very expensive and precious type of blade only forged by the gnomes of Tir Tochair, the sword is made with dark iron and the shape of the blade resembled a flame, as is common in gnomic tradition. On the blade there are many engraved floral decorations and a tower with a swallow on the top.",
    descriptionEn2:
      "In late 1267, Esterhazy, a very noted sword salesman in the town of Fano, gave it to Ciri as a gift, when she had been captured by Leo Bonhart. Ciri was then forced by Bonhart to fight with this sword, under the effects of Fisstech, in the Claremont arena owned by his cousin Houvenaghel. Ironically, early the following year during the assault at Stygga Castle, Bonhart was killed by Ciri with this sword.",
    origin: "The Witcher",
  },
  {
    key: 7,
    name: "Espada de acero del lobo",
    nameEn: `Wolven steel sword`,
    img: "/swords/wolven-steel-sword.png",
    img2: "/swords/wolven-steel-sword2.png",
    price: 185,
    description1:
      "La legendaria espada de acero del lobo es una hoja forjada con el acero más fino, y empleando las antiguas técnicas transmitidas a través de generaciones de maestros herreros. La hoja de la espada es larga y afilada, exudando un aura de elegancia y precisión mortal.",
    description2:
      "La empuñadura es una obra maestra en sí misma, envuelta en patrones intrincados que se asemejan al tejido de la piel de un lobo, proporcionando un agarre firme pero cómodo. La empuñadura está adornada con grabados detallados, que evocan la ferocidad y la gracia del lobo. En la base de la hoja, se pueden ver grabados delicados que fluyen sin interrupciones hacia el filo afilado del arma.",
    descriptionEn1:
      "The legendary Wolven steel sword, is a blade forged from the finest steel, its craftsmanship speaks volumes of the ancient techniques passed down through generations of master blacksmiths. The sword's blade is long and sharp, exuding an aura of both elegance and deadly precision.",
    descriptionEn2:
      "The hilt is a masterpiece in itself, wrapped in intricate patterns that resemble the weaving of a wolf's fur, providing a firm yet comfortable grip. The crossguard is adorned with detailed engravings, echoing the ferocity and grace of the wolf. At the base of the blade, one can see additional delicate engravings that flow seamlessly into the weapon's razor-sharp edge.",
    origin: "The Witcher",
  },
  {
    key: 8,
    name: "Cuchillos de Legolas",
    nameEn: "Legolas' knives",
    img: "/swords/legolas-knives.png",
    img2: "/swords/legolas-knives2.png",
    price: 180,
    description1:
      "Estos cuchillos fueron forjados por herreros elfos y tomados por Legolas en algún momento de su juventud. Los usó durante sus días en el Bosque Negro y los perdió cuando luchó contra el orco de Gundabad, Bolg, durante la Batalla de los Cinco Ejércitos, cuando apuñaló a Bolg con un cuchillo en la mano y otro en la cabeza, matándolo. El cuerpo de Bolg cayó desde Ravenhill con los cuchillos.",
    description2:
      "La hoja, esbelta y elegantemente curvada, brilla con una luz de otro mundo, sugiriendo que ha sido imbuida con energías místicas. El metal es de una aleación élfica única, conocida solo por los herreros de los claros ocultos, lo que le otorga una nitidez y resistencia incomparables. Intrincados patrones de enredaderas serpentean a lo largo de la hoja, entrelazándose y enroscándose en una danza delicada, insinuando los orígenes encantados de la espada.",
    descriptionEn1:
      "These knives were forged by elven smiths and taken by Legolas sometime in his youth. He used them during his days in Mirkwood and lost them when he fought the Gundabad Orc Bolg during the Battle of Five Armies, when he stabbed one into the Orc's hand and the other into his head, killing him. Bolg's body fell from Ravenhill with the knives.",
    descriptionEn2:
      "The blade, slender and gracefully curved, shimmers with an otherworldly light, suggesting it has been imbued with mystical energies. The metal is of a unique elven alloy, known only to the smiths of the hidden glades, which gives it unparalleled sharpness and resilience. Intricate vine-like patterns wind their way along the length of the blade, intertwining and spiraling in a delicate dance, hinting at the sword's enchanted origins.",
    origin: "The Lord of the Rings",
  },
  {
    key: 9,
    name: "Hadhafang",
    nameEn: "Hadhafang",
    img: "/swords/hadhafang.png",
    img2: "/swords/hadhafang2.png",
    price: 220,
    description1:
      'Elrond empuñó Hadhafang al final de la Segunda Edad, durante la guerra de la Última Alianza. Más tarde, su hija Arwen llevó Hadhafang cuando ayudó a Frodo a escapar de los Nazgûl. Inscrito en la hoja hay tengwar en (Neo-)Sindarin que dicen: "Aen estar Hadhafang i chathol hen, thand arod dan i thang an i arwen", que se traduce como "Esta hoja se llama Hadhafang, una noble defensa contra la multitud enemiga para una noble doncella".',
    description2:
      "La hoja exuda una belleza etérea y una gracia letal, encarnando la cúspide del arte élfico. Es esbelta y elegantemente curvada, y la aleación élfica utilizada en su creación es de una composición secreta, lo que le otorga a la hoja una nitidez y durabilidad incomparables.",
    descriptionEn1:
      'Elrond wielded Hadhafang at the end of the Second Age, during the war of the Last Alliance. Later, his daughter Arwen carried Hadhafang when she aided Frodo in his escape from the Ringwraiths. Inscribed on the blade are tengwar in (Neo-)Sindarin that say: "Aen estar Hadhafang i chathol hen, thand arod dan i thang an i arwen", which translates as "This blade is called Hadhafang, a noble defence against the enemy throng for a noble maiden".',
    descriptionEn2:
      "The blade exudes an ethereal beauty and a lethal grace, embodying the pinnacle of elven artistry. It is slender and elegantly curved and the elven alloy used in its creation is of a secret composition, giving the blade unmatched sharpness and durability.",
    origin: "The Lord of the Rings",
  },
  {
    key: 10,
    name: "Orcrist",
    nameEn: "Orcrist",
    img: "/swords/orcrist.png",
    img2: "/swords/orcrist2.png",
    price: 110,
    description1:
      'Durante la Primera Edad, Orcrist fue forjada junto con su "compañera", Glamdring, por herreros elfos. Tiene una hermosa vaina y una empuñadura adornada con joyas. Hay runas en la espada que llevan su nombre. A primera vista, Gandalf identificó la espada como una "buena hoja". Al igual que Glamdring y Dardo, Orcrist brilla siempre que los orcos están cerca.',
    description2:
      'Se perdió durante la Caída de Gondolin y fue descubierta junto con Glamdring siglos más tarde por Thorin, quien la usó para matar orcos en la Ciudad de los Trasgos después de matar al Gran Trasgo, pero la perdió cuando fue capturado por los Elfos del Bosque de Mirkwood y no le fue devuelta hasta después de la Batalla de los Cinco Ejércitos. Tras su muerte, Thranduil devolvió la espada y Orcrist fue colocada sobre la tumba de Thorin bajo la Montaña Solitaria, y "brillaba siempre en la oscuridad si se acercaban enemigos".',
    descriptionEn1:
      'During the First Age, Orcrist was forged alongside its "mate", Glamdring by Elf smiths. It has a beautiful scabbard and jeweled hilt. There are runes on the sword which bear its name. At first glance, Gandalf identified the sword as a "good blade". Like Glamdring and Sting, Orcrist glows whenever Orcs are near. ',
    descriptionEn2:
      'It was lost during the Fall of Gondolin and was discovered with Glamdring centuries later by Thorin, who used it to slay orcs in Goblin-town after the killing of the Great Goblin, but he lost it when he was captured by the Wood-elves of Mirkwood and was not returned to him until after the Battle of Five Armies. Upon his death, Thranduil returned the blade and Orcrist was placed upon Thorin\'s tomb under the Lonely Mountain, and it "gleamed ever in the dark if foes approached".',
    origin: "The Lord of the Rings",
  },
  {
    key: 11,
    name: "Dardo",
    nameEn: "Sting",
    img: "/swords/sting.png",
    img2: "/swords/sting2.png",
    price: 125,
    description1:
      "Dardo es una antigua hoja élfica hecha por herreros de armas en Gondolin. Al igual que Glamdring y Orcrist, Dardo brilla con una luz fría si hay orcos cerca, pero solo Dardo tiene un brillo azul. Se perdió durante la Caída de Gondolin, y a finales de la Tercera Edad, pasó a estar en posesión de tres trolls que habitaban en el este de Eriador. Fue en su cueva donde Bilbo y sus compañeros enanos encontraron a Dardo junto con Glamdring y Orcrist.",
    description2:
      "Justo antes de que su sobrino emprendiera su misión a Mordor desde Rivendel, Bilbo le dio Dardo a Frodo. Gollum, que detestaba cualquier cosa hecha por los elfos, temía a Dardo. Este miedo ayudó a Bilbo cuando confrontó a Gollum en la cueva en la base de las Montañas Nubladas, y también ayudó a Frodo y Sam a someter a Gollum décadas después.",
    descriptionEn1:
      "Sting is an ancient elvish blade made by weapon-smiths in Gondolin. Like Glamdring and Orcrist, it shines with a cold light, if any orcs are near, but only Sting glows blue. It was lost during the Fall of Gondolin, and by the late Third Age, it came into the possession of three trolls dwelling in eastern Eriador. It was in their cave that Bilbo and his Dwarven companions found Sting alongside Glamdring and Orcrist.",
    descriptionEn2:
      "Just before his nephew embarked on his quest to Mordor from Rivendell, Bilbo gave Sting to Frodo. Gollum, who disliked anything made by the Elves, was afraid of Sting. This fear aided Bilbo when he confronted Gollum in the cave at the base of the Misty Mountains, and also helped Frodo and Sam subdue Gollum decades later.\n",
    origin: "The Lord of the Rings",
  },
  {
    key: 12,
    name: "Espada de Stormwind",
    nameEn: "Stormwind sword",
    img: "/swords/stormwind-sword.png",
    img2: "/swords/stormwind-sword2.png",
    price: 570,
    description1:
      "La espada Stormwind es una espada de inmensa grandeza y poder. Fue forjada por los mejores artesanos del mítico reino de Eldoria, y es un testamento de una artesanía y un encantamiento mágico incomparables. La hoja, larga y formidable, está grabada con intrincados patrones y está letalmente afilada.",
    description2:
      "La empuñadura es una obra maestra de arte y diseño, envuelta en lujoso cuero azul oscuro, cruzado con hilos dorados que proporcionan un agarre firme y regio. La guarda es una elaborada exhibición de filigrana dorada, con la forma del majestuoso rostro de un león, con ojos incrustados de brillantes rubíes que parecen brillar con vida propia. Este motivo de león simboliza la fuerza, el coraje y el espíritu indomable del portador de la espada.",
    descriptionEn1:
      "The Stormwind sword is a sword of immense grandeur and power. It was crafted by the finest artisans in the mythical kingdom of Eldoria, is a testament to unparalleled craftsmanship and magical enchantment. The blade, long and formidable, is etched with intricate patterns, and is lethally sharp.",
    descriptionEn2:
      "The hilt is a masterpiece of artistry and design, wrapped in luxurious, deep blue leather, crisscrossed with golden threads that provide a firm and regal grip. The crossguard is an elaborate display of golden filigree, shaped into the majestic visage of a lion, its eyes set with brilliant rubies that seem to glint with a life of their own. This lion motif symbolizes strength, courage, and the indomitable spirit of the blade's wielder.",
    origin: "World of Warcraft",
  },
];

export default ITEM_LIST;
