import { Component,EventEmitter, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges, Output, } from '@angular/core';



@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {
  
  @Input() displayDetail : boolean;
  @Input() hitCount: number;
  hitMessage: string;
  @Output() valueChange : EventEmitter<string> = 
      new EventEmitter<string>();
  

  @ViewChild('filterElement') filterElementRef : ElementRef;
  private _listFilter : string;
  get listFilter() : string{
    return this._listFilter;
  }
  set listFilter(value : string){
    this._listFilter = value;
    this.valueChange.emit(value); // this becomes the event Payload.
  }
  constructor() { }

  

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) : void {
    if( changes['hitCount'] && !changes['hitCount'].currentValue){
      this.hitMessage = "No Matches Matched"
    } else {
      this.hitMessage = 'Hits : ' + this.hitCount;
    }
  }

  ngAfterViewInit(){
    if(this.filterElementRef){
      this.filterElementRef.nativeElement.focus();
    }

  
}

}
