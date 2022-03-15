import { Component, OnInit } from '@angular/core';
import { NavSettingsFieldInterface } from './header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  position: string = '';

  navSettingsFields: NavSettingsFieldInterface[] = [
    {
      pathIcon: 'assets/img/user-auth-yes.svg',
      text: 'Войти'
    },
    {
      pathIcon: 'assets/img/like.svg',
      text: 'Избранное'
    },
    {
      pathIcon: 'assets/img/cart.svg',
      text: 'Корзина'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.findNav();
  }

  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }

  findNav() {
    const success = (pos: any) => {
      this.position = pos.coords && pos.coords.latitude && pos.coords.longitude 
        ? `${pos.coords.latitude} : ${pos.coords.longitude}`
        : `0 : 0`
    }
    const error = () => {
      console.log('error');
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  test() {
    // console.log('test');
  }

}
