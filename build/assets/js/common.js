// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 115) {
//         $('.coin-list__header').addClass('fixed');
//     } else {
//         $('.coin-list__header').removeClass('fixed');
//     }

//     console.log(window.scrollY);
// });

function init() {
    // get json file with currencies
    $.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=20', coinsOut);
};

function coinsOut(data) {
    // print coins on page 

    var out = " ";
    for (const key in data) {
        console.log(data[key].market_cap_usd);

        out += '<div class="coins-list__row"><div class="container"><div class="row"><div class="col-lg-3"><div class="coins-list__row-coin">';
        out += `<div class="coins-list__row-coin-position">
        <span>${data[key].rank}</span>
        </div>`;
        out += `<div class="coins-list__row-coin-image">`;
        out += ` <img src="assets/svg/${data[key].symbol}.svg" alt="" width="23" height="23">`;
        out += `</div>`;
        out += `<div class="coins-list__row-coin-name">
        <span>${data[key].name}</span>
        </div>`;
        out += `</div></div>`;
        out += `<div class="col-lg-3">`;
        out += `<div class="coins-list__row-price">
        <span>
            <i>$</i>${data[key].price_usd}</span>
            </div>`;
        out += '</div>';
        out += `<div class="col-lg-3">`;
        out += `<div class="coins-list__row-market-cap"><span><i>$</i>${data[key].market_cap_usd}</span></div>`;
        out += '</div>';
        out += `<div class="col-lg-3">`;
        out += `<div class="coins-list__row-change"><span>${data[key].percent_change_24h}</span></div>`;
        out += `</div></div></div></div>`;
    };

    $('.coin-list__content').html(out);
};

$(document).ready(function () {
    init();
});