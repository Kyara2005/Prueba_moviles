import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'NUEVO SISTEMA DE ALERTA',
      message: '3. Sistema creado de alerta, ya puedes revisar las fotos en la siguiente seccion',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
