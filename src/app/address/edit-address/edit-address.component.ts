import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressModel } from 'src/app/models/address.model';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent {
  backgroundImageUrl = 'url("assets/img/breadcrumb.jpg")';
  addressForm!: FormGroup;
  addressId: number | null = null;
  address!: AddressModel;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.addressId = params['id'];
      if (this.addressId !== null) {
        this.loadAddress(this.addressId);
      }
    });
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

  loadAddress(addressId: number): void {
    // Call service to fetch the address details by ID
    // Assume you have a method in UserProfileService to get an address by ID
    this.userProfileService.getAddressById(addressId).subscribe({
      next: (address: AddressModel) => {
        // Populate the form with the fetched address data
        this.addressForm.patchValue(address);
        this.address = address;
      },
      error: (error) => {
        console.error('Error fetching address:', error);
      },
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      const addressModel: AddressModel = this.addressForm.value as AddressModel;
      addressModel.isShippingAddress =
        this.addressForm.getRawValue().isShippingAddress === 'true'
          ? true
          : false;
      addressModel.addressId = this.address.addressId;
      addressModel.userId = this.address.userId;

      let saveAddressObservable;
      if (this.addressId !== null) {
        // Edit existing address
        saveAddressObservable = this.userProfileService.updateAddress(
          this.addressId,
          addressModel
        );
      } else {
        // Create new address
        saveAddressObservable =
          this.userProfileService.saveAddress(addressModel);
      }

      saveAddressObservable.subscribe({
        next: (response) => {
          // Handle success response
          const action = this.addressId !== null ? 'updated' : 'created';
          this.toastrService.success(
            `Address ${action} successfully`,
            'Success'
          );
          this.router.navigate(['/user/address/list']);
        },
        error: (error) => {
          // Handle error response
          console.error('Error saving address:', error);
          this.toastrService.error('Failed to save address', 'Error');
        },
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
