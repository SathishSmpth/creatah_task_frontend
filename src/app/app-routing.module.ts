import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletepageComponent } from './components/deletepage/deletepage.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { VeiwpageComponent } from './components/veiwpage/veiwpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewpage/:id', component: VeiwpageComponent },
  { path: 'deletepage/:id',component:DeletepageComponent },
  { path: 'editpage/:id',component:EditpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
