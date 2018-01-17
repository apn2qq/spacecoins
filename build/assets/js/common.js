function init() {
    // get json file with currencies
    $.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=20', printCoinsCurrenciesOnPage);
};

function printCoinsCurrenciesOnPage(data) {

    let out = "";

    // деление маркеткапа на тысячные
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    for (let i = 0; i < data.length; i++) {
        let elements = data[i].market_cap_usd;
        console.log(numberWithCommas(elements));
    };

    // print pages on coin

    for (const key in data) {



        out += `<div class="coins-list__row">
            <div class="container">
                <div class="row">
                    <div class="col-3 col-lg-3">
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
                    <div class="col-3 col-lg-3">
                        <div class="coins-list__row-price">
                            <span>
                                <i>$</i>${data[key].price_usd}</span>
                        </div>
                    </div>
                    <div class="col-3 col-lg-3">
                        <div class="coins-list__row-market-cap">
                            <span>
                                <i>$</i>${data[key].market_cap_usd}</span>
                        </div>
                    </div>
                    <div class="col-3 col-lg-3">
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
};



$(document).ready(function () {
    init();
});