import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges,
  OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
/* Example usage:
      <pm-criteria #filterCriteria class='col-md-10'
                   [displayDetail]='includeDetail'
                   [hitCount]='filteredProducts?.length'>
      </pm-criteria>
*/
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    // emit event so that listeners, such as the parent of this component can react
    this.valueChange.emit(value);
  }

  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;
  // allow parent component to listen for value changes in the filter
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.filterElementRef) {
        this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = `Hits:${this.hitCount}`;
    }
  }

  ngOnInit() {
  }

}
