import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.peopleService.getPerson(this.id).subscribe(data => this.person = data);
  }

  updatePerson(): void {
    this.peopleService.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}