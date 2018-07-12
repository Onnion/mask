import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask-show',
  templateUrl: './mask-show.component.html',
  styleUrls: ['./mask-show.component.css']
})
export class MaskShowComponent implements OnInit {
  cleanCpf:string = "10832773409"
  cleanCnpj:string = "92994929395669"
  
  constructor() { }

  ngOnInit() {
  }

}
