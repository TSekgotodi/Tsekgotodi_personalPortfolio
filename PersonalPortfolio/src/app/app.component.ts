import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig]
})
export class AppComponent {

  title = 'PersonalPortfolio';

  /**
   *
   */
  constructor(config: NgsRevealConfig) {
    // super();
    config.duration = 5000;
    config.distance= '80px',
    config.duration =2000,
    config.delay =200
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('#.navbar');
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
    let sections =document.querySelectorAll('section');
    let navLinks =document.querySelectorAll('header nav a');

    window.scroll = () =>{
      sections.forEach(sec =>{
        let top =window.scrollX;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offset && top <offset +height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
          });
        };
      });
let header = document.querySelector('header');
header.classList.toggle('sticy',window.scrollY >100);
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

    };

  }

  menuIcon()
  {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('#.navbar');

    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
  }

}
