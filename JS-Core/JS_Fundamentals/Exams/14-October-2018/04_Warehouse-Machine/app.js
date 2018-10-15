function solve(arr) {
    let brands = [];

    function getBrandsByName(brands, brandName) {
        for (const brand of brands) {
            if (brand['name'] === brandName) {
                return brand;
            }
        }
    }

    function getProductByName(products, productName) {
        for (const product of products) {
            if (product['productName'] === productName) {
                return product;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(', ');
        let command = currentCommand[0];
        let brandName = currentCommand[1];
        let productName = currentCommand[2];
        let productDate = currentCommand[3];
        let productQuantity = +currentCommand[4];

        if (command === 'IN') {
            if (!getBrandsByName(brands, brandName)) { // If brand does not exist at the list
                let brand = {
                    name: brandName,
                    products: []
                };

                brand['products']
                    .push({
                        productName: productName,
                        productDate: productDate,
                        productQuantity: productQuantity
                    });

                brands.push(brand);
            } else {
                let brand = getBrandsByName(brands, brandName);

                if (!getProductByName(brand['products'], productName)) { // If the product does not exist in the brand
                    brand['products']
                        .push({
                            productName: productName,
                            productDate: productDate,
                            productQuantity: productQuantity
                        });
                } else {
                    let product = getProductByName(brand['products'], productName);

                    if (product['productDate'] < productDate) {
                        product['productDate'] = productDate;
                        product['productQuantity'] = productQuantity;
                    } else if (product['productDate'] === productDate) {
                        product['productQuantity'] += productQuantity;
                    }
                }
            }

        } else if (command === 'OUT') {
            // Check for the brand and the coffee
            let brand = getBrandsByName(brands, brandName);

            if (brand) {
                let product = getProductByName(brand['products'], productName);

                if (product) {
                    if (product['productDate'] > productDate && product['productQuantity'] > productQuantity) {
                        product['productQuantity'] -= productQuantity;
                    }
                }
            }
        } else if (command === 'REPORT') {
            printAllBrands(brands);
        } else if (command === 'INSPECTION') {
            printSortedBrands(brands);
        }
    }

    function printSortedBrands(brands) {
        console.log(`>>>>> INSPECTION! <<<<<`);

        let sortedBrands = brands.sort((firstBrand, secondBrand) => {
            return firstBrand['name'].localeCompare(secondBrand['name']);
        });

        for (const sortedBrand of sortedBrands) {

            console.log(`Brand: ${sortedBrand['name']}:`);

            let sortedProductsByQuantities = sortedBrand['products']
                .sort((firstProduct, secondProduct) => {
                    let productCompareResult = secondProduct['productQuantity'] - firstProduct['productQuantity'];

                    return productCompareResult;
                });

            for (const productByQuantity of sortedProductsByQuantities) {
                console.log(`-> ${productByQuantity['productName']} -> ${productByQuantity['productDate']} -> ${productByQuantity['productQuantity']}.`);
            }
        }
    }

    function printAllBrands(brands) {
        // print all the products in the warehouse as they were passed in the input
        console.log('>>>>> REPORT! <<<<<');

        for (const brand of brands) {
            console.log(`Brand: ${brand['name']}:`);

            for (const product of brand['products']) {
                console.log(`-> ${product['productName']} -> ${product['productDate']} -> ${product['productQuantity']}.`);
            }
        }
    }
}

let test0 = [
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
];

solve(test0);

