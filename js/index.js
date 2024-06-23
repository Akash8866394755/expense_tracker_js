var allPrice = [];
var allItem = [];
window.onload = function() {
    var localStorageItemListStr = localStorage.getItem("allItemArray");
    allItem = localStorageItemListStr.split(",");
    // alert(allItem)
    
    var localStoragePriceListStr = localStorage.getItem("allPriceArray");
     allPrice = localStoragePriceListStr.split(",");
    // alert(allPrice)

    var dynamicTag = document.getElementById("dynamic-tag");
    for(var i=0; i<allItem.length; i++) {

        var p = document.createElement("p");
        p.className = "style-class";
        p.innerHTML = "<b>"+allItem[i]+ " : </b>";
        var span = document.createElement("span");
        span.innerHTML = "<b>"+allPrice[i]+"</b>";
        dynamicTag.append(p);
        p.append(span);
    }

    var totalExpenseDiv = document.getElementById("total-expense-div");
    var p1 = document.createElement("p");
    var span1 = document.createElement("span");
    var sum = 0;
    totalExpenseDiv.innerHTML = "";

    for(var i=0; i<allPrice.length; i++) {

        p1.innerHTML = "<b>Total Expense : </b>";
        sum= sum+Number(allPrice[i]);
        span1.innerHTML = "<b>"+sum+"</b>";
        totalExpenseDiv.append(p1);
        p1.append(span1);
    }
    


}
// all items adding into local storage with array
// coding start
function add() {
    var item = document.getElementById("item").value;
    var price = document.getElementById("price").value;
    allPrice.push(price);
    allItem.push(item);
    localStorage.setItem("data",1);
    localStorage.setItem("allPriceArray",allPrice);
    localStorage.setItem("allItemArray",allItem);

    var dynamicTag = document.getElementById("dynamic-tag");
    var p = document.createElement("p");
    p.className = "style-class";
    p.innerHTML = "<b>"+item+" : </b>";

    var span = document.createElement("span");
    span.innerHTML = "<b>"+price+"</b>";

    dynamicTag.append(p);
    p.append(span);

    var totalExpenseDiv = document.getElementById("total-expense-div");
    var p1 = document.createElement("p");
    var span1 = document.createElement("span");
    var sum = 0;
    totalExpenseDiv.innerHTML = "";

    for(var i=0; i<allPrice.length; i++) {

        p1.innerHTML = "<b>Total Expense "+ ": </b>";
        sum= sum+Number(allPrice[i]);
        span1.innerHTML = "<b>"+sum+"</b>";
        totalExpenseDiv.append(p1);
        p1.append(span1);
    }

    
}
function clr() {
    // alert()
    localStorage.removeItem("allPriceArray");
    localStorage.removeItem("allItemArray");
    var totalExpenseDiv = document.getElementById("total-expense-div");
    totalExpenseDiv.innerHTML = "";

    var p = document.createElement("p");
    p.innerHTML = "<b>Total Expense : 0.00</b>";

    totalExpenseDiv.append(p);

    var dynamicTag = document.getElementById("dynamic-tag");
    dynamicTag.innerHTML = "";

}