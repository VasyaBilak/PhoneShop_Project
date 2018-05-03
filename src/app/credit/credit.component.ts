import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  annual: string;
  period: string;
  commission: string;
}

const ELEMENT_DATA: Element[] = [
  {name: '0,01% на 3 місяці', annual: '3', period: '0,01', commission: '2,5'},
  {name: '0,01% на 5 місяців', annual: '5', period: '0,01', commission: '2,5'},
  {name: '0,01% на 10 місяців', annual: '10', period: '0,01', commission: '2,5'},
  {name: '0,01% на 12 місяців', annual: '12', period: '0,01', commission: '2,5'},
  {name: '0,01% на 15 місяців', annual: '15', period: '0,01', commission: '2,5'},
  {name: '0,01% на 20 місяців', annual: '20', period: '0,01', commission: '2,5'},
  {name: '0,01% на 24 місяців', annual: '24', period: '0,01', commission: '2,5'},
  {name: 'Доступний стандарт', annual: 'немає', period: '0,01', commission: '2'},
  {name: 'Кредит із компенсацією до 35% IQ', annual: 'немає', period: '0,01', commission: '1,99'},
  {name: 'Стандарт на смартфони від компаній Samsung', annual: 'немає', period: '0,01', commission: '2,5'},
  
];
