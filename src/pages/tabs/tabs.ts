import { Component } from '@angular/core';

import { HomePage } from './../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  constructor() {

  }
}
