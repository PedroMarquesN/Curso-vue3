const app = {
    data(){
        return{
            name: 'Pedro',
            lastname: 'Marques',
            products: {
                title:'Calça 1' ,
                description: 'Calça 1',
                image: './assets/images/IMG-20231222-WA0003.jpg',
                stars: 3,
            },
            products2: {
                title:'Calça 2' ,
                description: 'Calça 2',
                image: './assets/images/IMG-20231222-WA0004.jpg',
                stars: 0,
            }
        }
    }
}

Vue.createApp(app).mount('#app')