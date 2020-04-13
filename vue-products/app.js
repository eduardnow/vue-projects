var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        altText: 'Socks green',
        inventary: 100,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                id: 2234,
                color: 'green',
                image: './assets/vmSocks-green-onWhite.jpg',
            },
            {
                id: 2235,
                color: 'blue',
                image: './assets/vmSocks-blue-onWhite.jpg',
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(variant) {
            this.image = variant.image;
        },
        removeFromCart() {
            if(this.cart > 0) {
                this.cart -= 1;
            }
        }
    }
});