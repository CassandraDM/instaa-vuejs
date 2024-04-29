export const FormComponent = {
    data() {
        return {
            titre: "",
            contenu: ""
        }
    },
    props: {
        handleSubmit: Function
    },
    template: `
    <form :submit.prevent="handleSubmit(titre, contenu)">
        <input type="text" placeholder="titre">
        <input type="text" placeholder="contenu">
        <input type="submit" value="Submit">
    </form>`
}