import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProductsService {
    ProductsStore = new Subject();

    localStorageStore = [
        {
            id: 1,
            image: 'https://placebear.com/300/200',
            title: 'title 01',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
            'been the industry\'s standard dummy text ever since the 1500s ',
            price: 1200
        },
        {
            id: 2,
            image: 'http://placekitten.com/g/300/200',
            title: 'title 02',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of' +
            ' classical Latin literature from 45 BC, making it over 2000 years old.',
            price: 300
        },
        {
            id: 3,
            image: 'http://baconmockup.com/300/200',
            title: 'title 3',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' +
            ' alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. ',
            price: 4000
        },
        {
            id: 4,
            image: 'https://placebear.com/300/200',
            title: 'title 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
            ' the industry\'s standard dummy text ever since the 1500s',
            price: 1200
        },
        {
            id: 5,
            image: 'http://placekitten.com/g/300/200',
            title: 'title 5',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' +
            ' alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. ',
            price: 300
        },
        {
            id: 6,
            image: 'http://baconmockup.com/300/200',
            title: 'title 6',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old.',
            price: 4000
        },
        {
            id: 7,
            image: 'https://placebear.com/300/200',
            title: 'title 7',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' +
            ' been the industry\'s standard dummy text ever since the 1500s',
            price: 1200
        },
        {
            id: 8,
            image: 'http://placekitten.com/g/300/200',
            title: 'title 08',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old.',
            price: 300
        },
        {
            id: 9,
            image: 'http://baconmockup.com/300/200',
            title: 'title 09',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' +
            ' been the industry\'s standard dummy text ever since the 1500s',
            price: 4000
        }

    ];

    store = [];

    constructor() {}

    getStore() {
        if (localStorage.getItem('store') === null) {
            localStorage.setItem('store', JSON.stringify(this.localStorageStore));
            this.store = JSON.parse(localStorage.getItem('store'));
        }
        this.store = JSON.parse(localStorage.getItem('store'));
        return this.store;
    }

    deleteItem(id: any) {
        const index = this.store.findIndex(i => i.id === id);
        this.store.splice(index, 1);
        localStorage.setItem('store', JSON.stringify(this.store));
        this.ProductsStore.next(this.store);
    }

    addProduct(product: any, editCheck?: any) {
        if (editCheck) {
            const index = this.store.findIndex(i => i.id === product.id);
            this.store[index].title = product.title;
            this.store[index].description = product.description;
            this.store[index].price = product.price;
            localStorage.setItem('store', JSON.stringify(this.store));
            this.ProductsStore.next(this.store);
            return;
        }
        this.store.push(product);
        localStorage.setItem('store', JSON.stringify(this.store));
        this.ProductsStore.next(this.store);
    }

}
