import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
   {
      id:1,
      foodName:"Combo Tiplo Individual",
      foodDetails: "01 Triplo Cheddar Bacon + coca lata + Sachê de Maionese Caseira Especial.",
      foodPrice:42.99,
      foodImg:"../../assets/imgs/ham-1.jpg",
      foodLink:"https://www.ifood.com.br/delivery/blumenau-sc/rancho-dos-rapazes-itoupava-norte/42f66698-88a5-4cc9-a101-7b4db1ab7a7b?prato=d55a5e0a-887c-491d-95b7-5cda14533999"
   },

   {
      id:2,
      foodName:"Combo Duplo",
      foodDetails: "01 Stacked Duplo Bacon + Refrigerante lata + Maionese Caseira Especial",
      foodPrice:31.90,
      foodImg:"./../assets/imgs/ham-2.jpg",
      foodLink:"https://www.ifood.com.br/delivery/blumenau-sc/rancho-dos-rapazes-itoupava-norte/42f66698-88a5-4cc9-a101-7b4db1ab7a7b?prato=c7d72832-70a4-4f93-9ee9-f383a1c486fb"
   },

   {
      id:3,
      foodName:"Combo Duplo Especial",
      foodDetails: "02 Stacked Duplo Bacon + refrigerante 600 ml + 02 Maionese Caseira Especial",
      foodPrice:64.90,
      foodImg:"./../assets/imgs/ham-3.jpg",
      foodLink:"https://www.ifood.com.br/delivery/blumenau-sc/rancho-dos-rapazes-itoupava-norte/42f66698-88a5-4cc9-a101-7b4db1ab7a7b?prato=3a40e3bb-d383-49a0-96a1-91f74826f806"
   },

   {
      id:4,
      foodName:"Combo Dos Irmãos",
      foodDetails: "3 Stacked Salada + Refrigerante 1,5 lts + 3 Sachês de Maionese Caseira Especial",
      foodPrice:64.90,
      foodImg:"./../assets/imgs/ham-4.jpg",
      foodLink:"https://www.ifood.com.br/delivery/blumenau-sc/rancho-dos-rapazes-itoupava-norte/42f66698-88a5-4cc9-a101-7b4db1ab7a7b?prato=b02a505d-77b7-482e-9b34-b7fe8728be83"
   },

   {
      id:5,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-5.jpg"
   },

   {
      id:6,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-6.jpg"
   },

   {
      id:7,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-7.jpg"
   },

   {
      id:8,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-8.jpg"
   },

   {
      id:9,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-9.jpg"
   },

   {
      id:10,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-10.jpg"
   },

   {
      id:11,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-11.jpg"
   },

   {
      id:12,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-12.jpg"
   },

   {
      id:13,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-13.jpg"
   },

   {
      id:14,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-14.jpg"
   },

   {
      id:15,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-15.jpg"
   },

   {
      id:16,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-16.jpg"
   },

   {
      id:17,
      foodName:"Paneer ",
      foodDetails: "Pan-fried",
      foodPrice:200,
      foodImg:"./../assets/imgs/ham-17.jpg"
   }

  ]
}
