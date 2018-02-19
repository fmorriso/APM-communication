import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

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
  listFilter: string;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;

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
      this.hitMessage = 'Hits:' + this.hitCount;
    }
  }

  ngOnInit() {
  }

}
