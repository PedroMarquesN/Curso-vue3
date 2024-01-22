const app = {
    data(){
        return{
            name: 'Pedro',
            lastname: 'Marques',
            products: [            
            {
                id: 1 ,
                title:'Calça 1' ,
                description: 'Calça 1',
                image: './assets/images/filme 2.webp',
                stars: 3,
            },
            {
                id: 2,
                title:'Calça 2' ,
                description: 'Calça 2',
                image: './assets/images/filme 1.png',
                stars: 0,
            }
        ],
        cart:[],
        }
    },
    computed: {
        fullName(){
            return this.name + ' ' + this.lastname
        }
    },


    methods: {
        addCart (product) {
            this.cart.push(product)
        },
        inCart(product){
            return this.cart.indexOf(product) != -1
        },
        removeCart(product) {
            this.cart = this.cart.filter((prod, index) => product != prod)
        }
    },
}

Vue.createApp(app).mount('#app')