Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks" :key="task.id">{{ task.description }}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                {id: 1, description: 'Go to the store', completed: true},
                {id: 2, description: 'Finish screencast', completed: false},
                {id: 3, description: 'Make donation', completed: false},
                {id: 4, description: 'Clear inbox', completed: false},
                {id: 5, description: 'Make dinner', completed: false},
                {id: 6, description: 'Clean room', completed: true},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
