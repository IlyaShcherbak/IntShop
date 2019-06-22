const category1 = {
    name: 'Appliances',
    subcategories: [
        'Laptops',
        'Personal Computers',
        'Tablets',
        'Accessories'
    ]
};

const category2 = {
    name: 'Tools and automotive products',
    subcategories: [
        'Tools',
        'Equipment',
        'Hand tools',
        'Auto products'
    ]
};

const category3 = {
    name: 'Plumbing and repairs',
    subcategories: [
        'Baths and showers',
        'Sinks and faucets,',
        'Heated towel rails',
        'Lighting'
    ]
};

const category4 = {
    name: 'Cottage and garden',
    subcategories: [
        'Garden equipment',
        'Seeds',
        'Irrigation systems',
        'Garden furniture and decor'
    ]
};

const category5 = {
    name: 'Sports and Hobbies',
    subcategories: [
        'Fitness equipment',
        'Fishing',
        'Hiking and camping',
        'Clothing for active recreation'
    ]

};

const category6 = {
    name: 'Childen\'s goods',
    subcategories: [
        'Toys',
        'Baby food',
        'Walking and outdoor activities',
        'Products for moms'
    ]
};

let categories = [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6
];

console.log(categories.length)

let cat = document.getElementById('categories');
for(let i=0; i<=categories.length-1; i++){
    let newLi = document.createElement('li');
    newLi.innerHTML = categories[i].name;
    cat.appendChild(newLi);
}
