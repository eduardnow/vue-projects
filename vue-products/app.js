var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        altText: 'Socks green',
        selectedVariant: 0,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                id: 2234,
                color: 'green',
                image: './assets/vmSocks-green-onWhite.jpg',
                quantity: 10,
            },
            {
                id: 2235,
                color: 'blue',
                image: './assets/vmSocks-blue-onWhite.jpg',
                quantity: 0,
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!';
            }

            return this.brand + ' ' + this.product + ' are not on sale';
        }
    }
});