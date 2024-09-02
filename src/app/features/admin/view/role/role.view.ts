import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { tagData } from '../../core/user-data'
import { Tag } from '../../core/data'

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterModule, MatPaginatorModule],
  templateUrl: './role.view.html',
  styleUrl: './role.view.scss'
})
export class RoleView implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'detalle'];
  dataSource = new MatTableDataSource<Tag>(tagData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
