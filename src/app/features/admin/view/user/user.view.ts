import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

export interface Data {
  name: string;
  lastName: string;
  detalle: string;
}

const Data: Data[] = [
  {name: 'Juan', lastName: 'Perez', detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'},
  {name: 'Juan', lastName: "Perez", detalle: 'detalle'}
];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatPaginatorModule],
  templateUrl: './user.view.html',
  styleUrl: './user.view.scss'
})
export class UserView implements AfterViewInit{
  displayedColumns: string[] = ['name', 'lastName', 'detalle'];
  dataSource = new MatTableDataSource<Data>(Data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
