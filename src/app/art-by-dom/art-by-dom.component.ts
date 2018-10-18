import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-by-dom',
  templateUrl: './art-by-dom.component.html',
  styleUrls: ['./art-by-dom.component.css']
})
export class ArtByDomComponent implements OnInit {

  public title: String;
  public domain_id: number;
  @Input() public error: String;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  domainSelected(domain_id: number): void {
    this.domain_id = domain_id;
    this.router.navigate(['/articles/search/' + domain_id]);
  }

}
