export default {
    props: {
        title: String,
        description: String
    },
    data: function() {
        return {
            isRead: false
        };
    },
    methods: {
        readArticle: function() {
            this.isRead = !this.isRead;
        }
    },
    //:title="title" => : pour v-bind:, title est un attribut HTMl, "title" correspond à la prop
    template: `
        <article>
            <span :title="title" @click="readArticle" style="cursor: pointer">
                {{ title }}
                <i v-if="isRead">(lu)</i>
            </span>
            <p>{{ description }}</p>
        </article>
    `
}