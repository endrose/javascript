console.log("Render JS");


let arr = [];
let total = document.querySelector("#total");
let amount = document.querySelector("#tot_amount");
let clearArr = document.querySelector("#clear");

amount.value = 0;
total.innerText = "Total : "+ 0;
function calculateAmount(val){

    arr.push(parseInt(val));

    // let sums = arr.reduce((item,index) =>  item + index );
    let sums = arr.reduce((item, index)=>{
        return item + index ;
    } );


    console.log(arr);
    console.log(sums);
    amount.value = val;
    total.innerText = "Total : " +sums;
}


clearArr.addEventListener("click", clearAll);


function clearAll(){
  
    if (arr.length > 0) {
        arr = [];
        amount.value = 0;
        total.innerText = "Total : "+ 0;
    }
    console.log(arr)
}
