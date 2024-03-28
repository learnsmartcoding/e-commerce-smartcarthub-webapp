import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressModel } from 'src/app/models/address.model';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
})
export class AddressListComponent implements OnInit {
  backgroundImageUrl = 'url("assets/img/breadcrumb.jpg")';
  addresses: AddressModel[] = [];
  constructor(
    private addressService: UserProfileService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress() {
    this.addressService.getAddress().subscribe((s: AddressModel[]) => {
      this.addresses = s;
    });
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id).subscribe({
      next: (response) => {
        // Handle success response
        this.toastrService.success('Address deleted successfully:', 'Address');
        this.getAddress();
      },
      error: (error) => {
        // Handle error response
        console.error('Error posting address:', error);
      },
      complete: () => {
        // Optionally handle completion
        console.log('Post address request completed.');
      },
    });
  }
}
