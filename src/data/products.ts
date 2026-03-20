import { Product } from '../types';


export const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 40',
    price: 4299,
    category: 'Взуття',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    description: 'Легкі бігові кросівки Nike Air Zoom Pegasus 40 з амортизацією Air Zoom для максимального комфорту на довгих дистанціях. Підошва з пінопласту React забезпечує пружний крок.',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    brand: 'Nike'
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 23',
    price: 5199,
    category: 'Взуття',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    description: 'Культові кросівки Adidas Ultraboost 23 з технологією Boost для неперевершеного повернення енергії. Верх Primeknit+ адаптується до форми стопи.',
    rating: 4.9,
    reviews: 521,
    inStock: true,
    brand: 'Adidas'
  },
  {
    id: 3,
    name: 'Футболка Under Armour Tech',
    price: 899,
    category: 'Одяг',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80',
    description: 'Технічна спортивна футболка Under Armour з тканиною з відведенням вологи. Легка та дихаюча, ідеальна для тренувань у залі та на відкритому повітрі.',
    rating: 4.5,
    reviews: 189,
    inStock: true,
    brand: 'Under Armour'
  },
  {
    id: 4,
    name: 'Штанга Олімпійська 20 кг',
    price: 8900,
    category: 'Обладнання',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    description: 'Олімпійська штанга 20 кг зі сталі з хромованою обробкою. Підходить для змагань та тренувань. Довжина 220 см, діаметр грифа 28 мм.',
    rating: 4.7,
    reviews: 94,
    inStock: true,
    brand: 'SportPro'
  },
  {
    id: 5,
    name: 'Велосипед Trek Marlin 5',
    price: 24999,
    category: 'Велоспорт',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    description: 'Гірський велосипед Trek Marlin 5 з алюмінієвою рамою Alpha Silver. 21 швидкість, дискові гальма, вилка з ходом 100 мм.',
    rating: 4.6,
    reviews: 67,
    inStock: true,
    brand: 'Trek'
  },
  {
    id: 6,
    name: 'Рюкзак Osprey Talon 22',
    price: 3799,
    category: 'Аксесуари',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description: 'Трекінговий рюкзак Osprey Talon 22 об\'ємом 22 літри. Вентильована спинна система AirScape, відділення для гідратора, кишені для телефону та перекусів.',
    rating: 4.8,
    reviews: 256,
    inStock: true,
    brand: 'Osprey'
  },
  {
    id: 7,
    name: 'Гантелі Reebok 2x10кг',
    price: 2199,
    category: 'Обладнання',
    image: 'https://images.unsplash.com/photo-1516481157630-05bc0aeb8b21?w=600&q=80',
    description: 'Набір гексагональних гантелей Reebok 2x10 кг з покриттям з неопрену. Зручна ергономічна ручка, не котяться по підлозі завдяки шестигранній формі.',
    rating: 4.4,
    reviews: 178,
    inStock: true,
    brand: 'Reebok'
  },
  {
    id: 8,
    name: 'Плавальні окуляри Speedo Biofuse',
    price: 649,
    category: 'Плавання',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
    description: 'Тренувальні плавальні окуляри Speedo Biofuse 2.0 з антитуманним покриттям. М\'яке ущільнення Bio-Fuse адаптується до обличчя для герметичного прилягання.',
    rating: 4.3,
    reviews: 412,
    inStock: false,
    brand: 'Speedo'
  },
  {
    id: 9,
    name: 'Тенісна ракетка Wilson Pro Staff',
    price: 7499,
    category: 'Теніс',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80',
    description: 'Професійна тенісна ракетка Wilson Pro Staff RF97 Autograph. Вага 340 г, голова 97 кв. дюймів, рамка з чистого графіту для точного контролю.',
    rating: 4.9,
    reviews: 88,
    inStock: true,
    brand: 'Wilson'
  },
  {
    id: 10,
    name: 'Йога килимок Manduka PRO',
    price: 3299,
    category: 'Йога',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    description: 'Преміальний йога килимок Manduka PRO товщиною 6 мм. Щільна PVC піна для підтримки суглобів, нековзне покриття з обох боків, довжина 180 см.',
    rating: 4.7,
    reviews: 334,
    inStock: true,
    brand: 'Manduka'
  },
  {
    id: 11,
    name: 'Футбольний м\'яч Puma Future',
    price: 1199,
    category: 'Футбол',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80',
    description: 'Тренувальний футбольний м\'яч Puma Future Flare розміру 5. Матеріал: поліуретан, бутилова камера для кращого утримання тиску.',
    rating: 4.5,
    reviews: 203,
    inStock: true,
    brand: 'Puma'
  },
  {
    id: 12,
    name: 'Фітнес-браслет Garmin Vivosmart 5',
    price: 5999,
    category: 'Гаджети',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80',
    description: 'Розумний фітнес-браслет Garmin Vivosmart 5 з моніторингом ЧСС, відстеженням сну, GPS та водонепроникністю 5 ATM. Батарея до 7 днів.',
    rating: 4.6,
    reviews: 445,
    inStock: true,
    brand: 'Garmin'
  }
];

export const categories = ['Всі', 'Взуття', 'Одяг', 'Обладнання', 'Велоспорт', 'Аксесуари', 'Плавання', 'Теніс', 'Йога', 'Футбол', 'Гаджети'];
