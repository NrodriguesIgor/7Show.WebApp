import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
    selector: 'page-stream',
    templateUrl: 'stream.html'
})
export class StreamPage {

    constructor(
        public navCtrl: NavController,
        private params: NavParams,
        private viewCtrl: ViewController,
        private camera: Camera,
    ) {

    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    back() {
        this.navCtrl.pop();
    }

    cameraOptionsSetter(sourceType): CameraOptions {
        return {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 1024,
            targetHeight: 720
        }
    }

    takePhoto() {
        this.camera.getPicture(this.cameraOptionsSetter(this.camera.PictureSourceType.CAMERA)).then((imageData) => {
            
        }, err => {
            
        });
    }

    openGallery() {
        this.camera.getPicture(this.cameraOptionsSetter(this.camera.PictureSourceType.PHOTOLIBRARY)).then((imageData) => {
            
        }, err => {
            
        });
    }



}
