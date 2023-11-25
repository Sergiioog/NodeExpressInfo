import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NodepagComponent } from './componentes/body/nodepag/nodepag.component';
import { ExpresspagComponent } from './componentes/body/expresspag/expresspag.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NodepagComponent,
    ExpresspagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
