import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RRD-Assessment';
  data : any[] = [];
  index = 0;
  target : any;
  filter : any[] = [];
  constructor(private rndr: Renderer2) {
      
  }

  ngOnInit() {
    this.data = [
      { type : 0, text1: "117-INCH CAST ALUMINUM WHEEL, FULLY PAINTED SILVER LITHO", text2: "Standard on Touring FWD", text3: "WGU", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/pic1.png"}, 
      { type : 1, text1: "217-INCH CAST ALUMINUM DIMOND, CUT WHEEL WITH BALTIC GREY POCKETS", text2: "Standard on Touring FWD/Hybrid and Touring Hybrid", text3: "WJR", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/pic2.png"}, 
      { type : 2, text1: "317-INCH CAST ALUMINUM WHEEL, FULLY PAINTED SILVER LITHO", text2: "Standard on Touring FWD", text3: "WGU", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/pic3.png"}, 
      { type : 3, text1: "417-INCH CAST ALUMINUM DIMOND, CUT WHEEL WITH BALTIC GREY POCKETS", text2: "Standard on Touring FWD/Hybrid and Touring Hybrid", text3: "WJR", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/pic4.png"}   
    ];
    this.index = 0;
      this.show_slide(this.index);
  }

  zoomit(ev: any) {
    var className = "wheelZoom";

    if(!this.target) {
      this.target = ev.target;
    }

    this.rndr.removeClass(this.target, className);

    if(ev.srcElement.childElementCount == 2)
      this.target = ev.target;
    else
      this.target = ev.srcElement.parentElement;

    this.rndr.addClass(this.target, className);
  }

  show_slide = (i: any) => {
    this.index += Number(i);
    var idx = 0;
    this.filter = [];

    if (this.index > this.data.length - 1) 
      this.index = 0 ;
    
    if (this.index < 0)
      this.index = this.data.length - 1;
    
    for(var id = this.index; id < (this.index+3); id++, idx++)
      this.filter[idx] = this.data[id];

  }

}
