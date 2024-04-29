export const post= {
    props: {
        image: String,
        titre: String,
        contenu: String,
        id: Number
    },
    template:`
    <div :key="id">
        <img :src=image alt="">
        <div class="post-content">
            <div>
                <h1> {{ titre }}</h1>
                <p>{{ contenu }}</p>
            </div>
            <div>
                <button @click="increase()">Like</button>
                <p>{{ nbLike }} like{{ nbLike > 1 ? "s" : "" }}</p>
            </div>
        </div>
    </div>`,
    data() {
        return{
            nbLike: 0
        }
    },
    computed: {
        increase(){
            this.nbLike++
        }
    
}
}
