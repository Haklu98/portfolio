import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./core/navigation/navigation.component";
import { FooterComponent } from "./core/footer/footer.component";
import { MatIconRegistry } from '@angular/material/icon';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [

      transition('HomePage => *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateX(100px)' }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(-100px)' }),
            animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))
          ], { optional: false })
        ])]),
        transition('CodePage => *', [
          query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
          group([
            query(':leave', [
              animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateY(100px)' }))
            ], { optional: true }),
            query(':enter', [
              style({ opacity: 0, transform: 'translateX(-100px)' }),
              animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
            ], { optional: false })
          ])]),
          transition('MusicPage => *', [
            query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
            group([
              query(':leave', [
                animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100px)' }))
              ], { optional: true }),
              query(':enter', [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
              ], { optional: false })
            ])]),
            transition('AboutPage => *', [
              query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
              group([
                query(':leave', [
                  animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateY(100px)' }))
                ], { optional: true }),
                query(':enter', [
                  style({ opacity: 0, transform: 'translateX(-100px)' }),
                  animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
                ], { optional: false })
              ])]),
              transition('ProjectPage => *', [
                query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
                group([
                  query(':leave', [
                    animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateY(100px)' }))
                  ], { optional: true }),
                  query(':enter', [
                    style({ opacity: 0, transform: 'translateY(-100px)' }),
                    animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
                  ], { optional: false })
                ])]),
                transition('ContactPage => *', [
                  query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
                  group([
                    query(':leave', [
                      animate('600ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100px)' }))
                    ], { optional: true }),
                    query(':enter', [
                      style({ opacity: 0, transform: 'translateY(100px)' }),
                      animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
                    ], { optional: false })
                  ])]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'AleksiHakalaPortfolio';

  getRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(
    private matIconReg: MatIconRegistry
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.matIconReg.setDefaultFontSetClass('material-icons-round');
  }
}
