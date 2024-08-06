import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatButtonModule],
  templateUrl: './admin.view.html',
  styleUrl: './admin.view.scss'
})
export class AdminView {

}
