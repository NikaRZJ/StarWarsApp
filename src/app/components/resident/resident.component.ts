import { Component, Input } from '@angular/core';
import { IResident } from 'src/app/models/resident';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent {
  @Input() resident: IResident;
}
