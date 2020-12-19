Vue.component('coupon', {
    template: `
        <input class="input" type="text" placeholder="Text input" @blur="couponApplied">
    `,
    methods: {
        couponApplied() {
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});
