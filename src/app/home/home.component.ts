import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {CardModel} from '../CardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // cards = [
  //   {
  //     title: 'Nature',
  //     text: 'Приро́да — материальный мир Вселенной, в сущности — основной объект изучения естественных наук.',
  //     imgUrl: 'https://cdn.oboi7.com/eaeb451ffe3f817c8d327b9a882fed99c83b44c2/pejzazhi-solnce-trava.jpg'
  //   },
  //   {
  //     title: 'River',
  //     text: 'Река́ — природный водный поток (водоток) значительных размеров с естественным течением по руслу',
  //     imgUrl: 'https://million-wallpapers.ru/wallpapers/0/5/436456957384667.jpg'
  //   },
  //   {
  //     title: 'Mountains',
  //     text: 'Гора́ — форма рельефа, изолированное резкое поднятие местности с выраженными склонами и подножием или вершина в горной стране',
  //     imgUrl: 'https://widewp.ru/images/nature/2326.jpg'
  //   },
  //   {
  //     title: 'Strawberry',
  //     text: 'Клубни́ка — название растений и ягод (многоорешков) одного из видов растений рода Земляника — земляники зеленой',
  //     imgUrl: 'https://million-wallpapers.ru/wallpapers/1/78/10067019145016867643.jpg'
  //   },
  //   {
  //     title: 'Butterfly',
  //     text: 'Бабочка – насекомое из отряда чешуекрылые.',
  //     imgUrl: 'https://images.wallpaperscraft.ru/image/sirenevyy_listya_cvety_babochka_4517_1920x1080.jpg'
  //   },
  //   {
  //     title: 'Owl',
  //     text: 'Совы — охотники-одиночки.',
  //     imgUrl: 'https://www.1zoom.ru/big2/887/329012-alexfas01.jpg'
  //   },
  //   {
  //     title: 'Sea',
  //     text: 'Мо́ре — это часть Мирового океана, обособленная сушей или возвышениями подводного рельефа.',
  //     imgUrl: 'https://c.wallhere.com/photos/c4/da/landscape-153510.jpg!d'
  //   }
  // ];
  inputStr: string;
  cards: Array<CardModel>;
  service: ClientServiceService;

  constructor(service: ClientServiceService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.cards = data;
      console.log(data);
    });
    this.inputStr = '';
  }

}
