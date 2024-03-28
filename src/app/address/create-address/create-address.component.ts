import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressModel } from 'src/app/models/address.model';
import {
  UserProfileModel,
  UserProfileService,
} from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css'],
})
export class CreateAddressComponent {
  backgroundImageUrl = 'url("assets/img/breadcrumb.jpg")';
  addressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private toastrService:ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.maxLength(50)]],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^\d{5}(-\d{4})?$/),
        ],
      ],
      isShippingAddress: [false],
    });
  }

  // Convenience getters for easy access to form controls
  get street() {
    return this.addressForm.get('street');
  }
  get city() {
    return this.addressForm.get('city');
  }
  get state() {
    return this.addressForm.get('state');
  }
  get zipCode() {
    return this.addressForm.get('zipCode');
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      const addressModel: AddressModel = this.addressForm.value as AddressModel;
      addressModel.isShippingAddress = this.addressForm.getRawValue().isShippingAddress==='true'?true:false;
      this.userProfileService.saveAddress(addressModel).subscribe({
        next: (response) => {
          // Handle success response
          this.toastrService.success('Address saved successfully:', 'Address');
          this.router.navigate(['/user/address/list']); // Change '/success' to your desired route
        },
        error: (error) => {
          // Handle error response
          console.error('Error posting address:', error);
        },
        complete: () => {
          // Optionally handle completion
          console.log('Post address request completed.');
        }
      });
    } else {
      // Handle form validation errors
      console.log('Form has validation errors.');
    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.addressForm.get(controlName);
    return control !== null && control.invalid && control.touched;
  }
}
