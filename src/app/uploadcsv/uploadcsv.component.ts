import {Component, OnInit, Inject, NgZone, ViewChild, Input, ElementRef} from '@angular/core';
import { Ng2UploaderModule } from 'ng2-uploader'
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  styleUrls: ['./uploadcsv.component.css']
})
export class UploadcsvComponent{
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  private success='false';
  options: Object = {
    data:{'class':localStorage.getItem("class")},
    url: 'http://localhost/untitledfolder/upload.php'
  };
  sizeLimit = 2000000;
  constructor(private router:Router){}
  handleUpload(data): void {
    if (data) {
      this.uploadFile = data;
      alert("File successfully uploaded");
      this.router.navigateByUrl("students");
    }
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}