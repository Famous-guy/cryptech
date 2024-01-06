$(function() {

    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR,ETH,JPY,CHF,LTC,AUD", function(data) {
        $.each(data['RAW'], function(index, value) {
            /* Bitcoing USD */
            var inputPrice = $('<input/>')
                .attr('class', index + "price")
                .attr('value', '1');

            var CurrencyType = $('<div/>')
                .attr('class', index + "type")
                .html('Bitcoin');

            var Currencyarrows = $('<div/>')
                .attr('class', "calcs-arrows");

            var inputMktcap = $('<input/>')
                .attr('class', index + "priceUSD")
                .attr('value', value['USD']['PRICE']);

            var Currencysymbol = $('<div/>')
                .attr('class', index + "type")
                .html('US Dollar');


            var $newDiv = $("<div/>") // creates a div element
                .attr("class", index) // adds the id
                .addClass("bitcoin-calc") // add a class
                .append(inputPrice)
                .append(CurrencyType)
                .append(Currencyarrows)
                .append(inputMktcap)
                .append(Currencysymbol)

            $(".bitcoin-calculator").append($newDiv);
        });
    });
});