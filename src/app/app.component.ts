import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBlog';
  posts = [{
  title : 'Premier poste',
  create : new Date(),
  contenu : 'voila le contenu de mon premier poste , il y a rien d\'interessant si tu veut changer le contenu vas directement sur AppComponent et change le contenu sinon tu peut jouer a cliquer sur love ou pas'
  },
  {
  title : 'deuxiemme poste',
  create : new Date(),
  contenu : 'voila le contenu de celui ci il est tout aussi interessant qu e le premier ! il faut croire que je manque d\'magination en ce moment!'
  },
 {
  title : 'Encore un poste',
  create : new Date(),
  contenu : 'voila le contenu du 3eme il est presque vide je te laisse le remplir!'
  }
];
}
