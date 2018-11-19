function acceptance() {
    addProduct();

    function addProduct() {

        let company = $("input[name=shippingCompany]").val();
        let product = $("input[name=productName]").val();
        let quantity = $("input[name=productQuantity]").val();
        let scrape = $("input[name=productScrape]").val();

        $('#fields :input').val(''); // reset input fields

        let emptyInputFields = (/\s\s+/g.test(company)) && (/\s\s+/g.test(product));

        let productValidations = company !== ''
            && product !== ''
            && quantity !== ''
            && scrape !== ''
            && !isNaN(quantity)
            && !isNaN(scrape)
            && quantity > 0
            && scrape > 0
            && quantity > scrape;

        if (productValidations && !emptyInputFields) {
            createNewProduct(company, product, quantity, scrape);
        }

        function createNewProduct(company, product, quantity, scrape) {
            let productContainer = $('<div class="parentDiv"></div>');

            let outOfStockBtn = $('<button type="button" class="outOfStock">Out of stock</button>');
            let productStr = `[${company}] ${product} - ${quantity - scrape} pieces`;

            let newProduct = $(`<p>${productStr}</p>`);

            productContainer.append(newProduct);
            productContainer.append(outOfStockBtn);

            $('#warehouse').append(productContainer);

        }

        $('.outOfStock:last-child').click(outOfStock);

        function outOfStock(e) {
            e.preventDefault();
            $(this).parents('#warehouse div').remove();
        }
    }
}