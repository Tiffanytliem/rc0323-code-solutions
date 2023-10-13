const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObject = prices.map(x => ({ price: x, salePrice: x / 2 }));
console.log('Price object', priceObject);

const formattedPrices = prices.map(x => `$${x.toFixed(2)}`);
console.log('Formatted prices', formattedPrices);
