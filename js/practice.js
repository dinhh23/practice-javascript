let companies = [
    { id: 1, name: "Amazon", sales: 3000 },
    { id: 2, name: "BestBuy", sales: 2000 },
    { id: 3, name: "Meijer", sales: 4000 },
    { id: 4, name: "Kroger", sales: 7000 },
    { id: 5, name: "Walmart", sales: 9000 },
    { id: 6, name: "PG", sales: 10000 }
];

const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let c of companies) {
       let tr = "<tr>";
       tr += `<td>${c.id}</td>`;
       tr += `<td>${c.name}</td>`;
       tr += `<td>${c.sales}</td>`;
       tr += "</tr>";
       tbody.innerHTML += tr;
    }
}
