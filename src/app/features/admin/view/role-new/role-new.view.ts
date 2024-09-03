import { Tag } from '../../core/data';
import { tagData } from '../../core/user-data';

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-role-new',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './role-new.view.html',
  styleUrl: './role-new.view.scss',
})
export class RoleNewView {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly permissionsSelected = signal<string[]>(['Perm_1']);
  readonly avaiblePermissions = signal<string[]>([
    'Perm_2',
    'Perm_3',
    'Perm_4',
    'Perm_5',
  ]);
  readonly currentPermission = signal('');
  readonly filteredPermissions = computed(() => {
    const currentRole = this.currentPermission().toLowerCase();
    return currentRole
      ? this.avaiblePermissions().filter((role) =>
          role.toLowerCase().includes(currentRole)
        )
      : this.avaiblePermissions().slice();
  });

  nameFormControl: FormControl = new FormControl('', [Validators.required]);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const index = this.avaiblePermissions().indexOf(value);
    if (value && index > 0) {
      this.permissionsSelected.update((permissions) => [...permissions, value]);
      this.currentPermission.set('');
    }
  }

  remove(permission: string): void {
    this.permissionsSelected.update((permissions) => {
      const index = permissions.indexOf(permission);
      permissions.splice(index, 1);
      return [...permissions];
    });

    this.avaiblePermissions.update((permissions) => {
      const index = permissions.indexOf(permission);
      permissions.push(permission);
      permissions.sort();
      return [...permissions];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.permissionsSelected.update((permissions) => [
      ...permissions,
      event.option.viewValue,
    ]);
    this.currentPermission.set('');
    event.option.deselect();
    this.avaiblePermissions.update((permissions) => {
      const index = permissions.indexOf(event.option.value);
      permissions.splice(index, 1);
      return [...permissions];
    });
  }

  save(): void {}
}
