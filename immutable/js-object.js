import { Map, List } from 'immutable';

const deep = Map({ a: 1, b: 2, c: List([3, 4, 5])});
console.log(deep.toObject());
console.log(deep.toArray());
console.log(deep.toJS());
console.log(JSON.stringify(deep));
console.log(deep.toJSON());




