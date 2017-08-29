import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../services/productsService.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-20%)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({
                    opacity: 0,
                    transform: 'translateX(20%)'}))
            ])
        ])
    ]
})
export class MainComponent implements OnInit {

    store: any;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.store = this.productsService.getStore();

        this.productsService.ProductsStore.subscribe(
            (store) => {
                this.store = store;
            }
        );
    }

}
