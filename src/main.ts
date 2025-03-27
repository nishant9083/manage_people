// Suggested code may be subject to a license. Learn more: ~LicenseLog:2394993915.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3091258628.
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PeopleListComponent } from './app/components/people-list/people-list.component';
import { EditPersonComponent } from './app/components/edit-person/edit-person.component';
import { provideHttpClient } from '@angular/common/http';
import { ViewPersonComponent } from './app/components/view-person/view-person.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: PeopleListComponent },
      { path: 'edit/:id', component: EditPersonComponent },
      {path: 'view/:id', component: ViewPersonComponent},
      {path: '**', redirectTo: ''}
    ]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
