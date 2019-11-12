export interface Pizzas {
  toppings: Topping[];
}

export enum Topping {
  AlredoSauce = 'alredo sauce',
  Anchovies = 'anchovies',
  Artichokes = 'artichokes',
  Bacon = 'bacon',
  Beef = 'beef',
  BlackOlives = 'black olives',
  CanadianBacon = 'canadian bacon',
  CarmelizedRedOnion = 'carmelized red onion',
  CheddarCheese = 'cheddar cheese',
  Chicken = 'chicken',
  DicedTomatoes = 'diced tomatoes',
  DicedWhiteOnions = 'diced white onions',
  FetaCheese = 'feta cheese',
  FourCheese = 'four cheese',
  FreshBasil = 'fresh basil',
  GarlicBasilOil = 'garlic basil oil',
  GiantPepperoni = 'giant pepperoni',
  GreenPeppers = 'green peppers',
  Ham = 'ham',
  HotPeppers = 'hot peppers',
  ItalianSausage = 'italian sausage',
  Jalapenos = 'jalapenos',
  Lettuce = 'lettuce',
  MozzarellaCheese = 'mozzarella cheese',
  Mushrooms = 'mushrooms',
  Onions = 'onions',
  ParmesanParsley = 'parmesan parsley',
  Pepperoni = 'pepperoni',
  Pineapple = 'pineapple',
  RefriedBeans = 'refried beans',
  RoastedRedPepper = 'roasted red pepper',
  RosaGrandePepperoni = 'rosa grande pepperoni',
  Salami = 'salami',
  Sausage = 'sausage',
  SlicedBreadedChickenBreast = 'sliced breaded chicken breast',
  SlicedRomaTomatoes = 'sliced roma tomatoes',
}

export interface Top20Topping {
  topping: string;
  rank: number;
}
