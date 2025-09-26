import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import Icon from '@/components/ui/icon';

const mockProducts = [
  {
    id: 1,
    name: 'Перфоратор Bosch PBH 2100',
    price: 15990,
    category: 'Перфораторы',
    image: '/img/209857e9-63f1-4f85-a5e6-e3fe5705b1f7.jpg',
    description: 'Профессиональный перфоратор для бетона и кирпича'
  },
  {
    id: 2,
    name: 'Перфоратор Makita HR2470',
    price: 18990,
    category: 'Перфораторы',
    image: '/img/209857e9-63f1-4f85-a5e6-e3fe5705b1f7.jpg',
    description: 'Мощный перфоратор с функцией отбойного молотка'
  },
  {
    id: 3,
    name: 'Перфоратор DeWalt D25133K',
    price: 22990,
    category: 'Перфораторы',
    image: '/img/209857e9-63f1-4f85-a5e6-e3fe5705b1f7.jpg',
    description: 'Компактный перфоратор для точных работ'
  },
  {
    id: 4,
    name: 'Шлифмашина Bosch GWS 750',
    price: 6990,
    category: 'Шлифовальные машины',
    image: '/img/742620fd-7bfe-4daf-8b93-bc42306470f8.jpg',
    description: 'Угловая шлифовальная машина 125 мм'
  },
  {
    id: 5,
    name: 'Шлифмашина Makita 9558HN',
    price: 8990,
    category: 'Шлифовальные машины',
    image: '/img/742620fd-7bfe-4daf-8b93-bc42306470f8.jpg',
    description: 'Компактная угловая шлифмашина для металла'
  },
  {
    id: 6,
    name: 'Шлифмашина DeWalt DWE4157',
    price: 12990,
    category: 'Шлифовальные машины',
    image: '/img/742620fd-7bfe-4daf-8b93-bc42306470f8.jpg',
    description: 'Мощная угловая шлифмашина 125 мм'
  },
  {
    id: 7,
    name: 'Отбойный молоток Bosch GSH 11 E',
    price: 45990,
    category: 'Обойные молотки',
    image: '/img/d80f71aa-3109-421b-8343-55b33f31b579.jpg',
    description: 'Профессиональный отбойный молоток для демонтажа'
  },
  {
    id: 8,
    name: 'Отбойный молоток Makita HM1203C',
    price: 52990,
    category: 'Обойные молотки',
    image: '/img/d80f71aa-3109-421b-8343-55b33f31b579.jpg',
    description: 'Мощный отбойный молоток с антивибрационной системой'
  },
  {
    id: 9,
    name: 'Дрель Bosch GSB 1600 RE',
    price: 3990,
    category: 'Дрели',
    image: '/img/ff13a2dd-6805-4943-b7dd-a84ad3f29300.jpg',
    description: 'Мощная ударная дрель для дома и мастерской'
  },
  {
    id: 10,
    name: 'Дрель аккумуляторная Makita DF333D',
    price: 8990,
    category: 'Дрели',
    image: '/img/ff13a2dd-6805-4943-b7dd-a84ad3f29300.jpg',
    description: 'Компактная аккумуляторная дрель-шуруповёрт'
  },
  {
    id: 11,
    name: 'Бетоносмеситель Lescha CM-160L',
    price: 24990,
    category: 'Оборудование для бетона',
    image: '/img/2713a0fc-d260-499b-b673-c54d290d185d.jpg',
    description: 'Профессиональный бетоносмеситель 160 литров'
  },
  {
    id: 12,
    name: 'Вибратор для бетона Elitech ПБ 38М',
    price: 12990,
    category: 'Оборудование для бетона',
    image: '/img/2713a0fc-d260-499b-b673-c54d290d185d.jpg',
    description: 'Погружной вибратор для уплотнения бетона'
  },
  {
    id: 13,
    name: 'Каток дорожный Bomag BW 100 AC-4',
    price: 890000,
    category: 'Оборудование для дорожных работ',
    image: '/img/0d902355-e0d8-4525-a263-8f10a37c8a2c.jpg',
    description: 'Профессиональный виброкаток для дорожного строительства'
  },
  {
    id: 14,
    name: 'Уплотнитель Wacker Neuson BS 50-4As',
    price: 65990,
    category: 'Оборудование для дорожных работ',
    image: '/img/0d902355-e0d8-4525-a263-8f10a37c8a2c.jpg',
    description: 'Вибротрамбовка для уплотнения грунта и асфальта'
  }
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const categories = ['all', 'Перфораторы', 'Шлифовальные машины', 'Обойные молотки', 'Дрели', 'Оборудование для бетона', 'Оборудование для дорожных работ'];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ONLINE STORE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Главная</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Магазин</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Категории</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Добро пожаловать в наш магазин
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Качественные товары с доставкой по всей России
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tiles */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Выберите категорию</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Grid3X3" size={18} />
              <span className="text-xs font-medium leading-tight">Все товары</span>
            </Button>
            <Button
              variant={selectedCategory === 'Перфораторы' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Перфораторы')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Drill" size={18} />
              <span className="text-xs font-medium leading-tight">Перфораторы</span>
            </Button>
            <Button
              variant={selectedCategory === 'Шлифовальные машины' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Шлифовальные машины')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="CircleSlash" size={18} />
              <span className="text-xs font-medium leading-tight">Шлифмашины</span>
            </Button>
            <Button
              variant={selectedCategory === 'Обойные молотки' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Обойные молотки')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Hammer" size={18} />
              <span className="text-xs font-medium leading-tight">Отбойники</span>
            </Button>
            <Button
              variant={selectedCategory === 'Дрели' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Дрели')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Wrench" size={18} />
              <span className="text-xs font-medium leading-tight">Дрели</span>
            </Button>
            <Button
              variant={selectedCategory === 'Оборудование для бетона' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Оборудование для бетона')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Building" size={18} />
              <span className="text-xs font-medium leading-tight">Бетон</span>
            </Button>
            <Button
              variant={selectedCategory === 'Оборудование для дорожных работ' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Оборудование для дорожных работ')}
              className="h-20 flex flex-col items-center justify-center space-y-1 text-center px-2"
            >
              <Icon name="Truck" size={18} />
              <span className="text-xs font-medium leading-tight">Дорожные работы</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить поисковый запрос или фильтры
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ONLINE STORE</h3>
              <p className="text-gray-400">
                Ваш надежный партнер в мире качественных товаров
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Перфораторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Шлифовальные машины</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дрели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оборудование для бетона</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@store.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ONLINE STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}