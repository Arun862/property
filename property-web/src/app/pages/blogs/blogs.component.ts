import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
constructor(
    private router: Router
  ){}
route(path: any){
  console.log(path);
  this.router.navigate(path)
}
}
