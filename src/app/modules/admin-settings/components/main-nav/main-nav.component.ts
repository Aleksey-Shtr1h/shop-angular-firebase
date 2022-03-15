import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  listNav = [
    {
      name: 'Настройка каталога', 
      pathIcon: 'assets/img/catalog-settings.svg',
      pathLink: '../edit-catalog'
    },
    {
      name: 'Слайдеры',
      pathIcon: 'assets/img/slider-settings.svg',
      pathLink: '../'
    },
    {
      name: 'Добавление товара',
      pathIcon: 'assets/img/add-product-settings.svg',
      pathLink: '../'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
