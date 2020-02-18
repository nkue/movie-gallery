import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageTileComponent } from '../../components/image-tile/image-tile.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SearchComponent } from '../../components/search/search.component';
import { AdditionalContentBarComponent } from '../../components/additional-content-bar/additional-content-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionalContentBarComponent,
    ImageTileComponent,
    LayoutComponent,
    routingComponents,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
