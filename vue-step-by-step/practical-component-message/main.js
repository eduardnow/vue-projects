Vue.component('message', {
    props: {
        title: '',
        body: '',
    },
    template: `
    <div class="card">
      <div class="card-header">
        {{title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{body}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`,
});

new Vue({
    el: '#root'
});
