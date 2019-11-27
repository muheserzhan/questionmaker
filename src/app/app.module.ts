import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BuilderTestComponent } from './core/component/builder-test/builder-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
