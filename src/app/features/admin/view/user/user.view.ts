import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  detalle: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, detalle: 'detalle'},
  {position: 2, name: 'Helium', weight: 4.0026, detalle: 'detalle'},
  {position: 3, name: 'Lithium', weight: 6.941, detalle: 'detalle'},
  {position: 4, name: 'Beryllium', weight: 9.0122, detalle: 'detalle'},
  {position: 5, name: 'Boron', weight: 10.811, detalle: 'detalle'},
  {position: 6, name: 'Carbon', weight: 12.0107, detalle: 'detalle'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, detalle: 'detalle'},
  {position: 8, name: 'Oxygen', weight: 15.9994, detalle: 'detalle'},
  {position: 9, name: 'Fluorine', weight: 18.9984, detalle: 'detalle'},
  {position: 10, name: 'Neon', weight: 20.1797, detalle: 'detalle'},
];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './user.view.html',
  styleUrl: './user.view.scss'
})
export class UserView {
  displayedColumns: string[] = ['position', 'name', 'weight', 'detalle'];
  dataSource = ELEMENT_DATA;
}
