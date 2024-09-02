import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { userData } from '../../core/user-data'
import { User } from '../../core/data'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './user.view.html',
  styleUrl: './user.view.scss'
})
export class UserView implements AfterViewInit{
  displayedColumns: string[] = ['name', 'lastName', 'detalle'];
  dataSource = new MatTableDataSource<User>(userData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
