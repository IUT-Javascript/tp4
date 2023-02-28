export default {
    props: {
        title: String,
        description: String
    },
    template: `
        <article>
            <span>{{ title }}</span>
            <p>{{ description }}</p>
        </article>
    `
}