const recipes = [
  {
    id: 1,
    title: "Empanadas chilenas de carne",
    slug: "empanadas-chilenas",
    description:
      "Este plato es perfecto para comer como desayuno o cena y es tan rico y completo que no podréis comer solo una.",
    prepTime: 45,
    servings: 1,
    image:
      "https://cdn.pixabay.com/photo/2018/05/18/03/56/empanadas-3410288_960_720.jpg",
    categoryId: 1,
    ingredients: [
      "Para la masa:",
      "3 tazas de harina de trigo",
      "1/3 taza de manteca",
      "3/4 de taza de leche tibia",
      "1/4 de taza de agua tibia",
      "1 cucharadita de polvo para hornear",
      "1 cucharadita de sal",
      "Para el relleno:",
      "1 kg. de carne de ternera para guisar",
      "1 taza de caldo de ternera",
      "3 cebollas",
      "1 pimiento rojo",
      "1 pimiento  verde",
      "2 cucharadas de harina",
      "1 cucharadita de pimiento dulce",
      "1 cucharadita de comino",
      "Aceitunas verdes en rodajas",
      "Pasitas bebé",
      "4 huevos",
      "Aceite",
      "Sal al gusto",
    ],
    instructions:
      "Comenzamos haciendo la masa. Para ellos derrite la manteca en un cazo a fuego lento. Mientras tanto, agrega en un bol la harina, el polvo para hornear y la sal. /n Cuando la manteca se haya derretido incorpórala al bol donde esta la masa y añade también la leche y el agua. Amasa con tus manos hasta tener una masa suave y consistente. Guarda la masa en la nevera hasta el momento de hacer las empanadas. /n Para empezar a hacer el guiso prepara todos os ingredientes. Corta la carne en cubitos pequeños. Luego, pela las cebollas, lava los pimientos y corta ambos ingredientes en cuadritos muy pequeños. /n Agrega un poco de aceite a una olla y cuando esté caliente sofríe la carne con el pimiento, la cebolla, el comino, el pimiento en polvo y sal al gusto. Deja que se dore la carne durante ocho minutos a fuego medio lento. /n Luego agrega a la olla el caldo de ternera y deja cocer la carne durante 30 minutos a fuego lento y con la olla tapada. Pasado el tiempo añade las dos cucharadas de harina, remueve bien, rectifica la sal y reserva. /n Cocina los huevos en un cazo con agua hirviendo durante 15 minutos. Cuando estén listos, aclara con abundante agua fría, pela y corta en rodajas. Aclara también las aceitunas para quitar el exceso de sal. /n Saca la masa de la nevera y extiende con la ayuda de un rodillo sobre un mesón enharinado. Corta círculos de masa con la ayuda de un plato para postres. Ve precalentando el horno de una vez a 200°C. /n Agrega una cucharada generosa de guiso de carne en el centro de uno de los círculos de masa. Luego añade tres aceitunas, cuatro pasitas y una rodaja de huevo. /n Humedece los bordes de la masa, dobla el círculo por la mitad para dar forma de empanada y sella los bordes doblándolos hacia el interior del círculo o aplastándolos con un tenedor. Repite el procedimiento hasta armar todas las empanadas. /n Coloca las empanadas en una bandeja forrada con papel film y luego pincélalas con clara de huevo. Hornea las empanadas durante 20 minutos a 200°C. Para que queden bien doraditas, activa la función grill del horno durante cinco minutos una vez que las empanadas estén listas. /n Saca tus empanadas chilenas de carne del horno, deja reposar durante diez minutos y luego sirve y disfruta con tu chimichurri de tomate. ¡A comer!",
  },
  {
    id: 2,
    title: "Crema de auyama, calabaza o zapallo",
    slug: "crema-auyama",
    description:
      "La ahuyama o auyama, también conocida como calabaza o zapallo, es utilizada en diversos platos de la cocina gourmet y de la gastronomía típica. Incluso, resulta ser un ingrediente tan versátil que lo podemos encontrar en platillos dulces y salados.",
    prepTime: 30,
    servings: 1,
    image:
      "https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375_960_720.jpg",
    categoryId: 2,
    ingredients: [
      "500 gr Auyama",
      "1 cebolla redonda",
      "500 ml de consomé o fondo de ave",
      "100 ml de crema de leche o nata",
      "Sal y pimienta al gusto",
      "2 cucharadas de mantequilla",
      "2 cucharadas de queso rallado (opcional)",
      "1 cucharada de perejil picado (opcional)",
    ],
    instructions:
      "Para empezar con esta receta de crema de auyama debes derretir la mantequilla (aceite) en una olla y añade la cebolla picada finamente. Deja sofreír hasta que la cebolla obtenga un color dorado e incorpora el caldo o fondo de ave junto a la auyama picada. Deja hervir durante 15 minutos y sazona con sal y pimienta – puedes agregar nuez moscada si lo deseas – deja hervir unos 15 minutos más. Transcurrido el tiempo, la auyama estará blanda. Seguidamente, debes licuar la auyama junto con el caldo y obtendrás una mezcla cremosa y homogénea. Retira de la licuadora y coloca la mezcla en un bowl grande donde vas a añadir la crema de leche. Revuelve hasta que se integren perfectamente los ingredientes y sirve aún caliente. Si quieres darle un toque especial, puedes decorar con un poco de queso rallado encima o perejil picado muy finamente. Incluso hay quienes le colocan pan tostado para acompañar, todo depende de tu gusto.",
  },
  {
    id: 3,
    title: "Gazpacho de invierno",
    slug: "gazpacho-invierno",
    description:
      "Quién dijo que el gazpacho solo se come en verano? ¡Alguien que no ha probado un exquisito gazpacho de invierno! Este plato es tan sustancioso como su versión tradicional, solo que se sirve templado para calentar las noches más frescas del año.",
    prepTime: 30,
    servings: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/05/05/19/06/tomato-soup-2288056_960_720.jpg",
    categoryId: 3,
    ingredients: [
      "1 lata grande de tomates pelados",
      "2 patatas",
      "2 dientes de ajo",
      "4 cucharadas de vinagre de Jerez",
      "8 cucharadas de aceite de oliva extra virgen",
      "3 rebanadas de pan del día anterior",
      "Agua templada",
      "Sal al gusto",
      "2 huevos hervidos (opcional)",
      "Jamón serrano en cuadritos (opcional)",
    ],
    instructions:
      "Empezamos cociendo las patatas enteras, sin pelarlas, en un cazo con abundante agua hirviendo. Mientras las patatas se ablandan, incorpora al vaso de la licuadora los tomates pelados, con los dientes de ajo, el vinagre y sal al gusto. Tritura hasta integrar todo correctamente. Cuando las patatas estén listas, pélalas calientes y agrégalas al vaso de la licuadora con el resto de la preparación. Incorpora también un poco de agua y tritura para tener una mezcla líquida, pero espesa. Luego añade a la licuadora el aceite y las rebanadas de pan y vuelve a procesar toda la preparación hasta tener una mezcla homogénea. Si está muy denso el gazpacho puedes agregar un poco más de agua. Rectifica la sal y disfruta tu gazpacho de invierto. Al servir cada porción, puedes añadir por encima trocitos de pan, de huevo duro y de jamón serrano. ¡Buen provecho!",
  },
  {
    id: 4,
    title: "Pie de limón",
    slug: "pie-limon",
    description:
      "Este postre es perfecto ya que tiene un toque dulce por el merengue y un toque ácido por el limón.",
    prepTime: 45,
    servings: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/03/15/19/18/tartlet-2147173_960_720.jpg",
    categoryId: 4,
    ingredients: [
      "Masa:",
      "2 tazas de harina sin polvos de hornear",
      "4 cucharadas de azúcar flor",
      "100 gr de mantequilla a temperatura ambiente",
      "2 yemas de huevo",
      "1 cucharadita de Esencia de Vainilla Gourmet ",
      "Relleno:",
      "2 tarros de leche condensada",
      "1 taza de jugo de limón",
      "3 yemas",
      "Merengue:",
      "4 claras",
      "3/4 taza de azúcar",
      "1 cucharada de azúcar flor",
    ],
    instructions:
      "Para la masa: Juntar la harina con el azúcar flor. Agregar la mantequilla y con las manos formar migas. Agregar la Esencia de Vainilla Gourmet y las yemas, mezclar hasta formar una masa blanda pero no pegajosa. Poner en una bolsa plástica y refrigerar por ½ hora.  Calentar el horno a 180C. Mantequillar un molde de tarta desmontable de 26 cm. Poner la masa en el fondo y lados del molde preparado y pinchar la masa con un tenedor. Hornear la masa por 15 minutos. Mientras tanto preparar el relleno y merengue. Para el relleno: Juntar las leches condensadas con el jugo de limón. Revolver hasta tener una mezcla homogénea. Agregar las yemas de a una, revolviendo bien. Reservar. Para el merengue: Batir las claras hasta que estén a nieve. Agregar el azúcar de a cucharadas, batir hasta tener un merengue duro y brillante. Finalmente agregar el azúcar flor y batir hasta integrar. Sacar la masa de horno, cubrir con el relleno de limón y luego tapar con cucharadas de merengue. Volver la tarta al horno y hornear por 15 minutos o hasta que el merengue este levemente dorado. Enfriar, desmoldar y servir.",
  },
];
const categories = [
  { id: 1, name: "Desayunos" },
  { id: 2, name: "Almuerzos" },
  { id: 3, name: "Cenas" },
  { id: 4, name: "Postres" },
];
const newRecipe = {
  id: null,
  title: "",
  categoryId: null,
  description: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRecipe,
  recipes,
  categories,
};
