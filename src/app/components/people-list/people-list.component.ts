import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { DeletePersonComponent } from '../delete-person/delete-person.component';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [DeletePersonComponent, RouterModule, NgFor, NgIf],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  showDeleteConfirmation = false;
  selectedPersonId: number | null = null;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(data =>{      
       this.people = data.users
      });
  }

  confirmDelete(id: number): void {
    this.selectedPersonId = id;
    this.showDeleteConfirmation = true;
  }

  handleCancelation():void {    
    this.selectedPersonId = null;
    this.showDeleteConfirmation = false;
  }
  handleDeleteSuccess(id: number): void {
    this.showDeleteConfirmation = false; // Hide the confirmation
    this.selectedPersonId = null; // Reset
    this.peopleService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(person => person.id !== id);
    });
  }

  deletePerson(id: number): void {
    this.peopleService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(person => person.id !== id);
    });
  }
}