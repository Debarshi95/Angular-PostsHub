import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PostsComponent } from "./components/posts/posts.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostEditComponent } from "./components/post-edit/post-edit.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostDetailComponent },
  {
    path: "posts/:id/edit",
    component: PostEditComponent
  },
  {
    path: "posts/:id/delete",
    redirectTo: "/posts",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
