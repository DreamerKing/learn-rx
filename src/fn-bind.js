const box = {
    weight: 2,
    getWeight(){
        return this.weight;
    }
}

const { getWeight } = box;

console.log(box.getWeight());

const bigBox = { weight: 20 };
console.log(bigBox::getWeight());

function add(val) {
    return this + val;
}

console.log(bigBox::getWeight()::add(5));

