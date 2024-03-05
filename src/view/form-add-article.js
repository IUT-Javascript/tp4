export default {
    data: function() {
        return {
            title: '',
            description: '',
            errorMessage: '',
            errorColor: ERROR_COLOR
        }
    },
    methods: {
        addNews: function() {
            this.errorMessage = '';
            if (!this.title || !this.description) {
                this.errorMessage = 'Title and description are required !';
                return;
            }

            const news = { title: this.title, description: this.description };
            console.log('form.addNews', news);

            //permet de faire remonter un event au composant parent
            //l'event sera écouté à l'appel du composant enfant via @add-news="function"
            this.$emit('addNews', news);

            this.title = '';
            this.description = '';
        }
    },
    /*
     * v-bind:style => permet de lier une propriété HTML (en l'occurence style) à des variables VueJS (modèle), on peut aussi écrire :style
     * @submit.prevent => permet de bloquer le rechargemente de la page à la validation du formulaire
     * v-model="variable" => permet de lier la valeur d'un champ (input, textarea etc...) à des variables VueJS (modèle)
     * @click => permet de définir un callback lorsque l'événement clique est déclenché
     */
    template: `<section>
                <h2>News form</h2>

                <form @submit.prevent>
                    <div v-bind:style="{ color: errorColor}">{{ errorMessage }}</div>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" v-model="title"/>
                    </div>

                    <div>
                        <label>Description</label><br/>
                        <textarea v-model="description"></textarea>
                    </div>

                    <input type="submit" value="Submit" @click="addNews"/>
                </form>
            </section>`
}