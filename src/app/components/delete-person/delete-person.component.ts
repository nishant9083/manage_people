import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-delete-person',
  standalone: true,
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent {
  @Input() personId!: number;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(private peopleService: PeopleService) {}

  confirmDelete(): void {   
    this.onDelete.emit(this.personId);
  }

  cancel(): void {
    this.onCancel.emit(); 
  }
}