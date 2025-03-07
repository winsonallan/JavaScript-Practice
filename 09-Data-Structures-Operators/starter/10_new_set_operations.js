'use strict';

//These methods are new (ES2025), so not all browsers would support it.

const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

console.log(italianFoods.isSubsetOf(mexicanFoods));

console.log(italianFoods.isSupersetOf(mexicanFoods));
