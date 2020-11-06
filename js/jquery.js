
$().ready(() => {                     // anomoyous function

    console.log("jQuery is ready");

    $("button").click(
        () => {
            console.debug("The button is clicked!");
        }
    );

    let value = $("input").val();
    console.log(value);
    value = Number(value) + 3;
    $("input").val(value);

}); 

// by id 
/* let value = $("input").val();
console.log(value);
value = Number(value) + 3;
$("input").val(value); */

// by class
/* let value = $(".nbr").val();
console.log(value);
value = Number(value) + 3;
$(".nbr").val(value); */