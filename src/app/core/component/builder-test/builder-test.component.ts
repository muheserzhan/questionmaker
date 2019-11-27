import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-builder-test',
  templateUrl: './builder-test.component.html',
  styleUrls: ['./builder-test.component.css']
})
export class BuilderTestComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorConfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ]
  }

  constructor() { }

  ngOnInit() {
  }

}
