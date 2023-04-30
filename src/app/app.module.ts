import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './block/header/header.component';
import { FooterComponent } from './block/footer/footer.component';
import { NavbarComponent } from './block/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import {MatTabsModule} from '@angular/material/tabs';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { TournamentsService } from './services/tournaments-service/tournaments.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TournamentsModule,
    MatSnackBarModule,
    MatMenuModule,
    provideFirebaseApp( () => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [TournamentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
