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

console.log(categories.length);
console.log(category1);




let cat = document.getElementById('categories');// получить див категории

for(let i=0; i<=categories.length-1; i++){

    let newLi = document.createElement('li');// создать пункт списка
    let newA = document.createElement('a');// создать А
    let name = document.createTextNode(categories[i].name); // создать текстовый узел

    newA.appendChild(name);// заполняем А текстовым узлом
    newLi.appendChild(newA); // заполняем Li
    //newLi.innerHTML = "<a>"+categories[i].name+ "</a>";

    let innerList = categories[i].subcategories;// беру масив подкатегорий
    let newUl = document.createElement('ul');

    for (let j=0; j<= categories.length-1; j++) {
        if (innerList[j] != undefined) {
            let subLi = document.createElement('li');
            let subCat = document.createTextNode(innerList[j]);
            subLi.appendChild(subCat);
            //newUl.style.display = 'none';

            newUl.appendChild(subLi);
            //newUl.innerHTML = '<li>'+ innerList[j] + '</li>';
        }
    }
    newUl.id ='subList';

    newLi.appendChild(newUl);
    cat.appendChild(newLi); // добавляет пункт в конец списка
}
