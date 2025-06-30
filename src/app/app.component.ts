import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
//   templateUrl: './app.component.html',
  template:`
  <app-header />
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
//   styleUrl: './app.component.scss'
  styles:[`
    main{
    padding:16px;
    }`
  ],
})
export class AppComponent {
  title = 'my-angular-project';
  name= "Yogesh";

//   hello(){
//     let x =20;
//     const y =30;
//     var data = 30;
//   }
}
