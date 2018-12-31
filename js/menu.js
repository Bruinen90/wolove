const menu = [
    {
        name: 'classic',
        ingredients: ['majonez', 'sałata', 'pikle', 'pomidor', 'ketchup', 'czerwona cebula'],
        price100g: 10,
        price200g: 15,
    },
    {
        name: 'cheese',
        ingredients: ['majonez', 'sałata', 'pikle', 'ser cheddar', 'czerwona cebula', 'ketchup', 'pomidor'],
        price100g: 11,
        price200g: 16,
    },
    {
        name: 'BBQ',
        ingredients: ['majonez', 'sałata', 'pikle', 'ser cheddar', 'bekon', 'czerwona cebula', 'autorski sos BBQ', 'pomidor'],
        price100g: 12,
        price200g: 17,
    },
    {
        name: 'ostrrry nacho',
        ingredients: ['majonez', 'sałata', 'pikle', 'papryczki jalapeno', 'papryczki chilli', 'autorski sos ostry', 'pomidor', 'nachosy'],
        price100g: 11,
        price200g: 16,
    },
    {
        name: 'burak',
        ingredients: ['sałata', 'pikle', 'grillowany burak', 'ser feta', 'pomidor', 'czerwona cebula', 'sos majonozowa-chrzanowy', 'sos pieprzowy'],
        price100g: 12,
        price200g: 17,
    },
    {
        name: 'góral',
        ingredients: ['majonez', 'sałata', 'pikle', 'ser wędzony', 'żurawina', 'rukola', 'czerwona cebula', 'autorski sos czosnkowy'],
        price100g: 14,
        price200g: 19,
    },
    {
        name: 'aloha',
        ingredients: ['majonez', 'sałata', 'pikle', 'bekon', 'pomidor', 'grillowany ananas', 'ser cheddar', 'autorski sos'],
        price100g: 14,
        price200g: 19,
    },
    {
        name: 'roman',
        ingredients: ['pesto', 'sałata', 'oliwki', 'mozzarella', 'szynka parmeńska', 'pomidor duszony'],
        price100g: 15,
        price200g: 20,
    },
    {
        name: 'yes-ser',
        ingredients: ['majonez', 'sałata', 'pikle', 'ser mozzarella', 'brie', 'lazur', 'parmezan', 'czerwona cebula', 'pomidor', 'ketchup'],
        price100g: 14,
        price200g: 19,
    },
]

const menuContainer = document.querySelector('.menu__container');
const output = [];
menu.forEach(burger => {
    let ingredients = burger.ingredients.join(', ');
    ingredients = ingredients[0].toUpperCase()+ingredients.slice(1);
    output.push(`<div class="menu__burger"><h2 class="menu__name">${burger.name}</h2><div class="menu__price">${burger.price100g}zł</div><div class="menu__price">${burger.price200g}zł</div><div class="menu__ingredients">${ingredients}</div></div>`
    )
})

menuContainer.innerHTML = output.join('');