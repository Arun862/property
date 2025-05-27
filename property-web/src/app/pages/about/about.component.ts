import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
    imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private router: Router
  ){}
route(path: any){
  console.log(path);
  this.router.navigate(path)
}

}
