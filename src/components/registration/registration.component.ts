import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../management/states';
import { Load, LoadEnd } from '../../management/actions';
import { selectLoading} from '../../management/selectors';
import { HttpService } from '../../services';
import { Encryption, SnackBarUtil } from '../../utils';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  fg: FormGroup;
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password: FormControl = new FormControl('', Validators.required);

  constructor(fb: FormBuilder, private service$: HttpService, private encryption$: Encryption, private snackbar$: SnackBarUtil, private store$: Store<AppState>) {
    this.fg = fb.group({
      email: this.email,
      password: this.password
    });
  }

  loading$ = this.store$.pipe(select(selectLoading));

  ngOnInit() {
    console.log('[RegistrationComponent] initialised');
  }

  createUser(event: Event) {
    try {
      this.showLoader();
      const { fg } = this;
      const user = fg.value;
      this.service$.createUser({email: user.email, password: user.password}).subscribe((response) => {
        const { token } = response.data;
        localStorage.setItem('token', this.encryption$.encryptToken(token, 30));
        this.hideLoader();
        fg.reset();
        this.snackbar$.open('Successfully registered user');
      });
      event.preventDefault();
    } catch (error) {
      this.hideLoader();
      this.snackbar$.open(error.message);
    }
  }

  showLoader() {
    this.store$.dispatch(new Load());
  }

  hideLoader() {
    this.store$.dispatch(new LoadEnd());
  }

}
