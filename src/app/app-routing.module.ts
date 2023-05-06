import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Exam/navbar/navbar.component';
import { HomepageComponent } from './Exam/homepage/homepage.component';
import { ExampageComponent } from './Exam/exampage/exampage.component';
import { ThankYouComponent } from './Exam/thank-you/thank-you.component';
import { Gard1Guard } from './gard/gard1.guard';

const routes: Routes = [

  { path: '', component: NavbarComponent,
children:[
  
    { path: 'home', component: HomepageComponent },
   { path: 'examPage', component: ExampageComponent,canActivate:[Gard1Guard] },
   {path:'ThankPage', component:ThankYouComponent},
{path: '', pathMatch: 'full', redirectTo: '/home' },

  
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
