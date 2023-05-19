import { Component, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  users: User[] = [];
  constructor(private userService: UserService) {
    userService.get().subscribe({
      next: (data) => (this.users = data),
      error: (e) => console.log(e),
    });
  }

  onDeleteHandler(user: User) {
    this.userService.delete(user).subscribe({
      next: (data) => (this.users = this.users.filter((u) => u.id !== user.id)),
      error: (e) => console.log(e),
    });
  }

  onDuplicateHandler(user: User) {
    this.userService.add({ ...user, id: 0 }).subscribe({
      next: (data) => this.users.push(data),
      error: (e) => console.log(e),
    });
  }

  addUser(user: User) {
    this.userService.add(user).subscribe({
      next: (data) => this.users.push(data),
      error: (e) => console.log(e),
    });
  }
}
