let user = {
    Name:'Arov',
    Id:111,
    job:'Gurafera'
};
let stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)
//
let shop = {
    name:'play store',
    address:'vuter goli',
    products:['boll','jarshi','bat','butt'],
    oner:{
        name:'neimar',
        profession:'player'
    },
    isExpensive: false
};
let shopStringified = JSON.stringify(shop);
console.log(shopStringified);
//
let converted = JSON.parse(shopStringified);
console.log(converted);