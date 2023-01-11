import { OrderDetailsService } from './../../service/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor (private service:OrderDetailsService) {}

   foodData:any;

   ngOnInit():void {
      this.foodData = this.service.foodDetails;
   }
}
