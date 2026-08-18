import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Service } from '../services/service/service';
import { TCustomsTestData, ICategoryGroup, ISubCategory } from '../services/interface/interfaceType';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private service = inject(Service);

  public categorys = signal<ICategoryGroup[]>([]);

  ngOnInit(): void {
    this.service.getTest().subscribe(datas => {
      const groups: ICategoryGroup[] = Object.entries(datas).map(([mainTitle, subData]) => {
        let keys: string[] = [];

        if (Array.isArray(subData)) {
          keys = [mainTitle];
        } else if (typeof subData === 'object' && subData !== null) {
          keys = Object.keys(subData);
        }

        const formattedSubCategories: ISubCategory[] = keys.map(key => {
          let routeLink = '/';

          if (key.includes('Конституці')) {   
            routeLink = '/ukrConst';
          } else if (key.includes('Митного кодексу') || key.includes('Митний кодекс')) {
            routeLink = '/custmCod';
          } else if (key.includes('державн')) {     
            routeLink = '/ukrCivil';
          } else {
            const match = key.match(/ОК[- ]?(\d+)/i);
            if (match && match[1]) {
              routeLink = `/ok-${match[1]}`;
            }
          }

          return {
            title: key,
            link: routeLink
          };
        });

        return {
          title: mainTitle,
          subCategory: formattedSubCategories
        };
      });

      this.categorys.set(groups);
    });
  }

  public clickTest(name: string): void {
    
  }
}