import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  salesActivity =[
    {type:"New Order",qty:"29",trend:"15% from this yesterday"},
    {type:"To Be Shipped",qty:"26",trend:"15% from this yesterday"},
    {type:"To Be Invoiced",qty:"34",trend:"15% from this yesterday"},
    {type:"To Be Delivered",qty:"66",trend:"15% from this yesterday"},
  ];

}
