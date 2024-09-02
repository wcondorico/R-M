import { data } from '../../core/user-data';
import { Data } from '../../core/data';

import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './user-detail.view.html',
  styleUrl: './user-detail.view.scss',
})
export class UserDetailView implements OnInit {
  hide = signal(true);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly roles = signal<string[]>(['Rol_1']);
  readonly allRoles: string[] = ['Rol_1', 'Rol_2', 'Rol_3', 'Rol_4', 'Rol_5'];
  readonly currentRole = signal('');
  readonly filteredRoles = computed(() => {
    const currentRole = this.currentRole().toLowerCase();
    return currentRole
      ? this.allRoles.filter(role => role.toLowerCase().includes(currentRole))
      : this.allRoles.slice();
  });

  nameFormControl!: FormControl;
  lastNameFormControl!: FormControl;
  emailFormControl!: FormControl;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const userData: Data | undefined = data.find((item) => item.id == id);
    this.nameFormControl = new FormControl(userData?.name, [
      Validators.required,
    ]);
    this.lastNameFormControl = new FormControl(userData?.lastName, [
      Validators.required,
    ]);
    this.emailFormControl = new FormControl(userData?.email, [
      Validators.required,
      Validators.email,
    ]);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.roles.update((roles) => [...roles, value]);
    }

    this.currentRole.set('');
  }

  remove(role: string): void {
    this.roles.update((roles) => {
      const index = roles.indexOf(role);
      if (index < 0) {
        return roles;
      }
      roles.splice(index, 1);
      return [...roles];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.roles.update(roles => [...roles, event.option.viewValue]);
    this.currentRole.set('');
    event.option.deselect();
  }

  saveData(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
