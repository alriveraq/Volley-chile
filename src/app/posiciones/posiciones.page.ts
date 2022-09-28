import { Component} from '@angular/core';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.page.html',
  styleUrls: ['./posiciones.page.scss'],
})
export class PosicionesPage{
  isModalOpenpun = false;
  isModalOpencen = false;
  isModalOpenop = false;
  isModalOpenar = false;

  setOpenpun(isOpen: boolean) {
    this.isModalOpenpun = isOpen;
  }
  setOpencen(isOpen: boolean) {
    this.isModalOpencen = isOpen;
  }
  setOpencop(isOpen: boolean) {
    this.isModalOpenop = isOpen;
  }
  setOpenar(isOpen: boolean) {
    this.isModalOpenar = isOpen;
  }
}
