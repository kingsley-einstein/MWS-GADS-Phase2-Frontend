import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select} from '@ngrx/store';
import { AppState } from '../../management/states';
import { selectLoading } from '../../management/selectors';
import { Load, LoadEnd } from '../../management/actions';
import { Encryption, SnackBarUtil } from '../../utils';
import { HttpService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    console.log('[LoginComponent] initialised');
  }

  logUserIn(event: Event) {
    try {
      this.showLoader();
      const { fg } = this;
      this.service$.logUserIn(fg.value).subscribe((response) => {
        const { token } = response.data;
        localStorage.setItem('token', this.encryption$.encryptToken(token, 30));
        this.hideLoader();
        fg.reset();
        this.snackbar$.open('Successfully logged in');
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
