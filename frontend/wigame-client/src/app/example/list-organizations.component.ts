/*@Component({
  selector: 'tac-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss'],
})
export class ListOrganizationsComponent implements OnInit {
  organizations: Training[];
  cols;
  organizationTag = $localize`:@@organization:`;
  createOrganizationTag = $localize`:@@createOrganization:`;
  cancel = $localize`:@@cancel:`;
  delete = $localize`:@@delete:`;
  displayForm = false;
  formGroup;
  organizationToModify: Organization;
  submitted = false;

  constructor(private router: Router, private toastr: ToastrService, private organizationService: OrganizationService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      nameContact: new FormControl('', [Validators.required]),
      firstnameContact: new FormControl('', [Validators.required]),
      mailContact: new FormControl('', [Validators.required]),
      telContact: new FormControl('', [Validators.required]),
    });
    this.organizationService.getAllOrganizations().subscribe(
      (data) => {
        this.organizations = data;
      },
      () => {}
    );
    this.cols = [
      { field: 'name', header: $localize`:@@name:` },
      { field: 'nameContact', header: $localize`:@@nameContact:` },
      { field: 'firstnameContact', header: $localize`:@@firstname:` },
      { field: 'telContact', header: $localize`:@@tel:` },
      { field: 'mailContact', header: $localize`:@@mail:` },
    ];
  }

  createOrganization(): void {
    this.submitted = false;
    this.organizationToModify = null;
    this.formGroup.patchValue({
      name: '',
      nameContact: '',
      firstnameContact: '',
      telContact: '',
      mailContact: '',
    });
    this.displayForm = true;
  }

  modifyOrganization(id): void {
    this.submitted = false;
    this.organizationService.getOrganizationById(String(id)).subscribe((data) => {
      this.organizationToModify = data;
      this.formGroup.patchValue({
        name: data.name,
        nameContact: data.nameContact,
        firstnameContact: data.firstnameContact,
        telContact: data.telContact,
        mailContact: data.mailContact,
      });
      this.displayForm = true;
    });
  }

  saveOrganization(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      const newOrganization = this.getObjectFromForm();
      if (this.organizationToModify != null) {
        newOrganization.id = this.organizationToModify.id;
        this.organizationService
          .updateOrganization(newOrganization)
          .subscribe(() => this.toastr.success($localize`:@@organizationUpdated:`));
      } else {
        this.organizationService
          .createOrganization(newOrganization)
          .subscribe(() => this.toastr.success($localize`:@@organizationCreated:`));
      }
      this.displayForm = false;
      window.location.reload();
    }
  }

  getObjectFromForm(): Organization {
    return {
      name: this.formGroup.value.name,
      nameContact: this.formGroup.value.nameContact,
      firstnameContact: this.formGroup.value.firstnameContact,
      telContact: this.formGroup.value.telContact,
      mailContact: this.formGroup.value.mailContact,
    };
  }
}*/
