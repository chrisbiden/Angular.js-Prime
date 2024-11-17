import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {

    tieredItems: MenuItem[] = [];

    ngOnInit() {
        this.tieredItems = [
          {
            label: 'Buy Crypto',
            icon: 'pi pi-credit-card',
            url: 'https://pool4ever.com/app-buy-page',
          },
          {
            label: 'Spot',
            icon: 'pi pi-chart-bar',
            items: [
              {
                label: 'Wallet',
                icon: 'pi pi-wallet',
                route: '/wallet',
              },
              {
                label: 'Trade',
                icon: 'pi pi-server',
                route: '/trade',
              },
              {
                label: 'Quick Swap',
                icon: 'pi pi-pencil',
                route: '/quick-swap',
              },
              {
                label: 'Fees & Limits',
                icon: 'pi pi-folder-open',
                route: '/fees',
              },
              {
                separator: true,
              },
              // {
              //   label: "Templates",
              //   icon: "pi pi-palette",
              //   items: [
              //     {
              //       label: "Apollo",
              //       icon: "pi pi-palette",
              //       badge: 2,
              //     },
              //     {
              //       label: "Ultima",
              //       icon: "pi pi-palette",
              //       badge: 3,
              //     },
              //   ],
              // },
            ],
          },
          {
            label: 'Market Rates',
            icon: 'pi pi-table',
            url: 'https://pool4ever.com/app-exchange',
          },
          {
            label: 'Mining Pools',
            icon: 'pi pi-table',
            url: 'https://pool4ever.com',
          },
          {
            label: 'Help Center',
            icon: 'pi pi-info-circle',
            route: '/support',
          },
        ];
      }

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }
}
