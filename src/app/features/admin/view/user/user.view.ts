import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { data } from '../../core/user-data'
import { Data } from '../../core/data'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatPaginatorModule],
  templateUrl: './user.view.html',
  styleUrl: './user.view.scss'
})
export class UserView implements AfterViewInit{
  displayedColumns: string[] = ['name', 'lastName', 'detalle'];
  dataSource = new MatTableDataSource<Data>(data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
