import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-view-person',
  imports: [NgIf],
  templateUrl: './view-person.component.html',
  styleUrl: './view-person.component.css'
})
export class ViewPersonComponent {
  person: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    // private router: Route,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.peopleService.getPerson(this.id).subscribe(data => this.person = data);
  }

}
