import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../services/productsService.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
    createForm: FormGroup;

    constructor(
        private http: Http,
        private productService: ProductsService) {
    }

    ngOnInit() {
        this.createForm = new FormGroup({
            'title': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
            'imageUrl': new FormControl(null, [Validators.required, this.validImageLink.bind(this)]),
            'price': new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        console.log(this.createForm);
        const newProduct = this.createForm.value;
        newProduct.id = this.productService.getStore().length + 1;
        this.productService.addProduct(newProduct);
        this.createForm.reset();
    }

    validImageLink(control: FormControl): {[s: string]: boolean} {
        const reg = new RegExp('https?:\/\/.*', 'g');
        let result = null;
        if (control.value !== null && control.value.length > 4) {
            result = control.value.match(reg);
            if (result === null) {
                return {'linkIsNotValid': true};
            }else {
                return null;
            }
        }
        return null;
    }

}
