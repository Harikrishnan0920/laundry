import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import data from "../../../address.json"

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  address: any = data['address']
  ngOnInit(): void {
    console.log("ADDRESS", this.address)
  }
}
