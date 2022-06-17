


function addAllItems(i){
return /*html*/`
<div class="dish-box">
    <div class="gap">
        <span class="dishTitle"><b>${dishes[i]}</b></span>
        <span class="min-font"><i>${description[i]}</i></span>
        <span class="priceTitle"><b>${prices[i]} €</b></span>
    </div>
    <img class="plusButton" src="img/plus.png" onclick="addToBasket(${i})">
</div>
`;
}