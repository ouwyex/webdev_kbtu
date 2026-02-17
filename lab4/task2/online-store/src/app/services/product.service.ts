import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro 256GB',
        description: 'Смартфон с чипом A17 Pro, камерой 48 МП и титановым корпусом. Экран Super Retina XDR 6.1", поддержка USB-C и Action Button.',
        price: 519990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/h3b/85989783347230.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf5/h3b/85989783347230.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8c/85989783380000.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h0e/85989783412768.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-titanium-112310454/'
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 256GB',
        description: 'Флагманский смартфон с встроенным S Pen, камерой 200 МП и экраном Dynamic AMOLED 2X 6.8". Поддержка Galaxy AI и зум 100x.',
        price: 549990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pba/p41/86488319180830.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pba/p41/86488319180830.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p05/p40/86488319213598.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p70/p3f/86488319246368.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-chernyi-titanium-113832399/'
      },
      {
        id: 3,
        name: 'Apple MacBook Air 13" M2 256GB',
        description: 'Ультратонкий ноутбук с чипом M2, до 18 часов автономной работы и дисплеем Liquid Retina. Весит всего 1.24 кг, без вентилятора.',
        price: 469990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p63/p73/81438592827422.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p50/p73/81438592860190.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p3d/p73/81438592892958.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-serebryanyi-102636474/'
      },
      {
        id: 4,
        name: 'Sony PlayStation 5 Slim',
        description: 'Игровая консоль нового поколения с SSD на 1 ТБ, поддержкой 4K и трассировкой лучей. Новый компактный дизайн, тише и легче оригинала.',
        price: 279990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p43/p60/85959296483358.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p60/85959296483358.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p30/p60/85959296516126.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p1d/p60/85959296548896.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-белый-112258406/'
      },
      {
        id: 5,
        name: 'Apple AirPods Pro 2nd Gen',
        description: 'Беспроводные наушники с активным шумоподавлением H2, адаптивным звуком и до 30 часов работы с чехлом. Поддержка MagSafe и Lossless Audio.',
        price: 119990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2a/82232981848094.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p29/p2a/82232981880862.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p16/p2a/82232981913630.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-magsafe-case-usb-c-белый-107268781/'
      },
      {
        id: 6,
        name: 'Samsung 55" QLED 4K Smart TV',
        description: 'Телевизор с технологией Quantum Dot, процессором Neo Quantum и поддержкой Dolby Atmos. Операционная система Tizen с доступом к стриминговым сервисам.',
        price: 319990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/pb5/85362700025886.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p58/pb5/85362700025886.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p45/pb5/85362700058654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p32/pb5/85362700091424.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-55-qe55q80cauxce-chernyi-111164726/'
      },
      {
        id: 7,
        name: 'DJI Mini 4 Pro',
        description: 'Квадрокоптер весом до 249г с камерой 4K/60fps и HDR-видео. Всенаправленное обнаружение препятствий, до 34 минут полёта.',
        price: 349990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/pb5/86082461433886.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1e/pb5/86082461433886.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0b/pb5/86082461466654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/pb4/86082461499424.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dji-mini-4-pro-fly-more-combo-rc-2-серый-113168897/'
      },
      {
        id: 8,
        name: 'Dyson V15 Detect Absolute',
        description: 'Беспроводной пылесос с лазерным обнаружением пыли и пьезодатчиком для измерения всасываемых частиц. До 60 минут работы, 5 режимов мощности.',
        price: 289990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p5d/p8f/83765428011038.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p5d/p8f/83765428011038.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4a/p8f/83765428043806.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p37/p8f/83765428076574.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-zolotistyi-109007703/'
      },
      {
        id: 9,
        name: 'iPad Air 5th Gen 256GB Wi-Fi',
        description: 'Планшет с чипом M1, дисплеем Liquid Retina 10.9" и поддержкой Apple Pencil 2-го поколения. Разблокировка по Touch ID на кнопке питания.',
        price: 289990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p88/p0e/80024960688158.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p75/p0e/80024960720926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p62/p0e/80024960753694.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-5th-generation-10-9-256gb-wi-fi-serebryanyi-99948640/'
      },
      {
        id: 10,
        name: 'Xiaomi Robot Vacuum X10+',
        description: 'Робот-пылесос с лазерной навигацией LDS, мощностью всасывания 4000 Па и самоочисткой базы. Функции влажной уборки и картографирования нескольких этажей.',
        price: 179990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p99/84949481586718.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p72/p99/84949481586718.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p5f/p99/84949481619486.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4c/p99/84949481652254.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-plus-belyi-112108454/'
      },
      {
        id: 11,
        name: 'Sony WH-1000XM5',
        description: 'Полноразмерные наушники с лучшим в классе шумоподавлением и 8 микрофонами. До 30 часов автономной работы, быстрая зарядка 3 минуты = 3 часа.',
        price: 139990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1f/p2d/82394978230302.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p2d/82394978263070.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf9/p2c/82394978295838.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-103406580/'
      },
      {
        id: 12,
        name: 'GoPro HERO12 Black',
        description: 'Экшн-камера со стабилизацией HyperSmooth 6.0 и съёмкой 5.3K/60fps. Водонепроницаемость до 10 м, Ultra Wide 177°, HDR фото и видео.',
        price: 159990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p93/85659042562078.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p7b/p93/85659042562078.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p68/p93/85659042594846.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p55/p93/85659042627616.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-112096888/'
      }
    ];
  }
}
