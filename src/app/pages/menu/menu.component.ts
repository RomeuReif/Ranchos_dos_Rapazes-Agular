import { OrderDetailsService } from './../../service/order-details.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

   foodData:any;

   constructor(private service:OrderDetailsService) {}

   ngOnInit():void {
      this.foodData = this.service.foodDetails;
   }
}
