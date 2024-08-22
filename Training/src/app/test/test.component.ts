import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

@Input("username") name: any;
value=false;
text="text";
constructor()
{
  console.log("constructor");
  console.log(this.name)
}
ngOnChanges()
{
   console.log(this.name);
}
  ngOnInit()
{
  console.log("ng oninit");
  console.log(this.name);
}
ngDoCheck()
{
  console.log("ng do check");
}
ngAfterContentInit()
{
  console.log("ng after content init");
}
ngAfterContentChecked()
{
  console.log("ng after content checked");

}
ngAfterViewInit()
{
  console.log("ngAfterViewInit");
}
}
