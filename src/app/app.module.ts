import { BrowserModule } from '@angular/platform-browser';
import { NgModule  , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Timeline.js';
import '@ui5/webcomponents/dist/TimelineItem.js';
import '@ui5/webcomponents-icons/dist/icons/search.js';
import '@ui5/webcomponents-icons/dist/icons/forward.js';
import '@ui5/webcomponents-icons/dist/icons/history.js';
import '@ui5/webcomponents-icons/dist/icons/action.js';
import '@ui5/webcomponents-icons/dist/icons/notes.js';
import '@ui5/webcomponents-icons/dist/icons/customer.js';
import '@ui5/webcomponents-icons/dist/icons/suitcase.js';
import '@ui5/webcomponents/dist/Select';
import '@ui5/webcomponents/dist/CheckBox';

import '@ui5/webcomponents/dist/BusyIndicator';
import '@ui5/webcomponents/dist/MessageStrip';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '@ui5/webcomponents/dist/CustomListItem.js';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
