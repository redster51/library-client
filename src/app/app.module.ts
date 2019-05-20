import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {HoverDirective} from './hover.directive';
import {NavComponent} from './nav/nav.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import {HttpClientModule} from '@angular/common/http';
import {SettingsComponent} from './settings/settings.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AddCardComponent} from './add-card/add-card.component';
import {BookComponent} from './book/book.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'book/:id', component: BookComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HoverDirective,
    NavComponent,
    SearchComponent,
    SearchPipe,
    SettingsComponent,
    HomeComponent,
    NotFoundComponent,
    AddCardComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
