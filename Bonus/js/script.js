// Bonus:

// 1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

var app = new Vue(
    {
        el: '#root',

        data: {

            newToDo: '',
            userFilterText: '',
            
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false,
                    isVisible: true,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                    isVisible: true,

                },
                {
                    text: 'Fare il bucato',
                    done: false,
                    isVisible: true,

                },
            ],

        },

        methods: {
            removeItem(toDoIndex) {
                this.todos.splice(toDoIndex, 1);
            },

            addToDo() {
                // Invece di lavorare sulla stringa originale
                // lavoro sulla stringa senza gli spazi ai lati (trim)
                // cosi capisco se l'utente ha inserito solo spazi nella stringa
                const trimmedString = this.newToDo.trim();
                if (trimmedString.length > 0) {

                    // Devo leggere il testo della input
                    // Creare un nuovo oggetto

                    const newToDoObj = {
                        text: trimmedString,
                        done: false,
                        isVisible: true
                    }

                    // lo pusho
                    this.todos.push(newToDoObj);

                    this.newToDo = '';
                }
            },

            // 2 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
            toggleDone(todoIndex) {
                // Dobbiamo invertire la proprietà done
                // sul todo che ha indice index
                this.todos[todoIndex].done = !this.todos[todoIndex].done;
            },

            filterElementsByText() {
                const userInputLower = this.userFilterText.toLowerCase();

                // Verifichiamo se la stringa data dall'utente
                // è contenuta nella proprietà text di ogni todo
                this.todos.forEach((element) => {
                    const elementTextLower = element.text.toLowerCase();

                    if (elementTextLower.includes(userInputLower)) {
                        element.isVisible = true;
                    } else {
                        element.isVisible = false;
                    }
                })
            }
        },
    }    
);