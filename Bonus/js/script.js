// Bonus:

// 1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// 2 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

var app = new Vue(
    {
        el: '#root',

        data: {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Fare il bucato',
                    done: true,
                },
            ],
        },

        methods: {
            removeItem(index) {
                this.todos.splice(index, 1);
            },

            addToDo() {
                if (this.newToDo.length > 0) {
                    this.todos.push({
                        text: this.newToDo,
                        done: false,
                    });

                    this.newToDo = '';
                }
            },
        }
    },
);