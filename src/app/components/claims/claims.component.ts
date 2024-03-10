import { Component, Input } from '@angular/core';
import { Claim } from 'src/app/models/claim';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {
  @Input() claims: Claim[] = [];
}
