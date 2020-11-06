let nbr = 0;

// methods
$(() => {

    display();

    $("#minus").on("click", () => {
        nbr--;
        display();
    });

    $("#plus").on("click", () => {
        nbr++;
        display();
    });


})
// function
const display = () => {
    $("#nbr").val(nbr);
    // styling 
    $("#nbr").css("color", "black")
            .css("fontStyle", "normal")
            .css("fontWeight", "normal");
    if(nbr % 2 == 0)
        $("#nbr").css("color", "red");
    if(nbr % 3 == 0)
        $("#nbr").css("fontWeight", "bold");
    if(nbr % 5 == 0)
        $("#nbr").css("fontStyle", "italic");
}