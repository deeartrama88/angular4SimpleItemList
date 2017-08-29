import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../services/productsService.service';

@Component({
    selector: 'app-single-product',
    templateUrl: './single-product.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SingleProductComponent implements OnInit {
    deleteWarningMessage = false;
    deleteProductID: any;
    product: any;
    edit = false;
    editForm: FormGroup;

    constructor(
        private productService: ProductsService,
        private router: ActivatedRoute,
        private Router: Router
    ) {
    }

    ngOnInit() {
        this.router.params.subscribe(
            (params) => {
                const array = this.productService.getStore();
                const param = +params['id'];
                for (let i = 0; i < array.length; i++) {
                    if (array[i].id === param) {
                        this.product = array[i];
                        return;
                    }
                }
            }
        );

        this.editForm = new FormGroup({
            'title': new FormControl(this.product.title, Validators.required),
            'description': new FormControl(this.product.description, Validators.required),
            'price': new FormControl(this.product.price, Validators.required)
        });
    }

    deleteProductWarning(id: any) {
        this.deleteProductID = id;
        this.deleteWarningMessage = true;
    }

    delete() {
        this.deleteItem(this.deleteProductID);
        this.deleteWarningMessage = false;
        this.Router.navigate(['']);
    }

    cancel() {
        this.deleteWarningMessage = false;
    }

    deleteItem(id: any) {
        this.productService.deleteItem(id);
    }

    onSubmit() {
        console.log(this.editForm);
        this.product.title = this.editForm.value.title;
        this.product.price = this.editForm.value.price;
        this.product.description = this.editForm.value.description;
        const editCheck = true;
        this.productService.addProduct(this.product, editCheck);
        this.editForm.reset();
        this.edit = false;
    }

    onEdit() {
        this.edit = true;
    }

}
