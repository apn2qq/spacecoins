function init() {
    // get json file with currencies
    $.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=20', printCoinsCurrenciesOnPage);
};

function printCoinsCurrenciesOnPage(data) {

    let out = "";
    for (const key in data) {
        //console.log(data[key].market_cap_usd);

        // out += '<div class="coins-list__row"><div class="container"><div class="row"><div class="col-lg-3"><div class="coins-list__row-coin">';
        // out += `<div class="coins-list__row-coin-position">
        // <span>${data[key].rank}</span>
        // </div>`;
        // out += `<div class="coins-list__row-coin-image">`;
        // out += ` <img src="assets/svg/${data[key].symbol}.svg" alt="" width="23" height="23">`;
        // out += `</div>`;
        // out += `<div class="coins-list__row-coin-name">
        // <span>${data[key].name}</span>
        // </div>`;
        // out += `</div></div>`;
        // out += `<div class="col-lg-3">`;
        // out += `<div class="coins-list__row-price">
        // <span>
        //     <i>$</i>${data[key].price_usd}</span>
        //     </div>`;
        // out += '</div>';
        // out += `<div class="col-lg-3">`;
        // out += `<div class="coins-list__row-market-cap"><span><i>$</i>${data[key].market_cap_usd}</span></div>`;
        // out += '</div>';
        // out += `<div class="col-lg-3">`;
        // out += `<div class="coins-list__row-change"><span>${data[key].percent_change_24h}<img src="assets/svg/arrow-down-red.svg" alt="" width="5" height="7"></span></div>`;
        // out += `</div></div></div></div>`;

        out += `<div class="coins-list__row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="coins-list__row-coin">
                            <div class="coins-list__row-coin-position">
                                <span>${data[key].rank}</span>
                            </div>
                            <div class="coins-list__row-coin-image">
                                <img src="assets/svg/${data[key].symbol}.svg" alt="" width="23" height="23">
                            </div>
                            <div class="coins-list__row-coin-name">
                                <span>${data[key].name}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="coins-list__row-price">
                            <span>
                                <i>$</i>${data[key].price_usd}</span>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="coins-list__row-market-cap">
                            <span>
                                <i>$</i>${data[key].market_cap_usd}</span>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="coins-list__row-change">
                            <span>${data[key].percent_change_24h}
                                <img src="assets/svg/arrow-down-red.svg" alt="" width="5" height="7">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };

    $('.coins-list__content').html(out);

    // count values in footer info blocks

    var totalMarketCap = 0;
    var sum;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    console.log(sum);
};



$(document).ready(function () {
    init();
});