var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var UploadcsvComponent = (function () {
    function UploadcsvComponent() {
        this.hasBaseDropZoneOver = false;
        this.options = {
            url: 'http://localhost/untitledfolder/upload.php'
        };
        this.sizeLimit = 2000000;
    }
    UploadcsvComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    };
    UploadcsvComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadcsvComponent.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    };
    UploadcsvComponent = __decorate([
        Component({
            selector: 'app-uploadcsv',
            templateUrl: './uploadcsv.component.html',
            styleUrls: ['./uploadcsv.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UploadcsvComponent);
    return UploadcsvComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/uploadcsv/uploadcsv.component.js.map