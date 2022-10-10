import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTestComponent } from './user-test/user-test.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes= [
  {path: "", redirectTo: "myProfile", pathMatch: "full"},
  {path: "myProfile", component: UserProfileComponent},
  {path: "test", component: UserTestComponent},

]


@NgModule({
  declarations: [
    UserProfileComponent,
    UserTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsermModule { }
