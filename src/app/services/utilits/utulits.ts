import { inject, Injectable, signal } from '@angular/core';
import { Service } from '../service/service';

@Injectable({
  providedIn: 'root',
})
export class Utulits {
  private service = inject(Service);
  public isVisible = signal<boolean>(false);

}
