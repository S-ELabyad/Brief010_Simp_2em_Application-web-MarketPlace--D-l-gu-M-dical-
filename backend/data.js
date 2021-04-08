import bcrypt from 'bcryptjs';

const data = {
   
    users : [
        {
            name:'saloua',
            email: 'admin@gmail.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin : true,
        },
        {
            name:'ayoub',
            email: 'user@gmail.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin : false,
        },

    ],
    products : [
        {
            name : 'Bavette',
            category :'Bavettes',
            image:'/images/photo1.jpg',
            price:120,
            countInStock:10,
            brand : 'bavette',
            rating:4.5,
            numReviews : 15,
            description : 'produit de bonne qualie',

        },
        {
            name : 'Salvo',
            category :'Salvos',
            image:'/images/photo2.jpg',
            price:130,
            countInStock:20,
            brand : 'Salvo',
            rating:2.5,
            numReviews : 10,
            description : 'produit de bonne qualie',

        },
        {
         
            name : 'Echographie',
            category :'Echographies',
            image:'/images/photo3.jpg',
            price:140,
            countInStock:30,
            brand : 'Echographie',
            rating:3.5,
            numReviews : 15,
            description : 'produit de bonne qualie',

        },
        {
           
            name : 'Vaccin',
            category :'Vaccins',
            image:'/images/photo4.jpg',
            price:520,
            countInStock:50,
            brand : 'Vaccin',
            rating:5.5,
            numReviews : 17,
            description : 'produit de bonne qualie',

        },
        {
       
            name : 'oil ',
            category :'oils',
            image:'/images/photo5.jpg',
            price:160,
            countInStock:100,
            brand : 'oil',
            rating:7.5,
            numReviews : 20,
            description : 'produit de bonne qualie',

        },
        {
          
            name : 'Sanata',
            category :'Sanatas',
            image:'/images/photo6.jpg',
            price:190,
            countInStock:0,
            brand : 'Sanata',
            rating:2.5,
            numReviews : 5,
            description : 'produit de bonne qualie',

        },

    ],
}


export default data;