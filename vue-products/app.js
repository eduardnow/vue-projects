Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    `,
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText" />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>Shipping {{ shipping }}<p>

                <p>{{ sale }}</p>

                <product-details :details="details"></product-details>

                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variant.id" class="color-box"
                    :style="{ backgroundColor: variant.color }" @mouseover="updateProduct(index)"></div>

                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to
                    Cart</button>
                <button v-on:click="removeFromCart">Remove from cart</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
        </div>
    `,
  data() {
    return {
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
        },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      cart: 0,
    };
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
    },
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
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }

      return 2.99;
    },
  },
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  },
});
