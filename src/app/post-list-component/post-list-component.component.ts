import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  constructor() { }
oui = 0;
non = 0;
@Input() titlePost: string;
@Input() created_at;
@Input() content: string;
  ngOnInit() {
  }
nombreOui(){
return(this.oui++);
}
nombreNon(){
return(this.non++);
}
}
