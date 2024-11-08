const customers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "inactive" },
     { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "inactive" }
];

let currentPage = 1;
const rowsPerPage = 2; 
function renderTable(page) {
    const tableBody = document.getElementById("customerTableBody");
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = customers.slice(start, end);
    paginatedItems.forEach(customer => {
        const row = document.createElement("tr");
        row.innerHTML = ` 
        <td>${customer.name}</td> 
        <td>${customer.company}</td> 
        <td>${customer.phone}</td> 
        <td>${customer.email}</td> 
        <td>${customer.country}</td> 
        <td><button class="status ${customer.status}">${customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
        </button></td>
         `;
        tableBody.appendChild(row);
    }); updatePageNumber();
} 



function updatePageNumber() {
    document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
}
document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1)
    { currentPage--; renderTable(currentPage); }
});
document.getElementById("next").addEventListener("click", () => {
    if (currentPage * rowsPerPage < customers.length) { currentPage++; renderTable(currentPage); }
});
function updateInfoCards() {
    document.getElementById("totalCustomers").querySelector("span").textContent = customers.length;
    document.getElementById("totalMembers").querySelector("span").textContent = customers.filter(c => c.status === "active").length;
}


document.addEventListener('click', (e) => {
    if (e.target.classList.contains("status")) {
        e.target.classList.toggle("active");
        e.target.classList.toggle("inactive");
        e.target.textContent = e.target.classList.contains("active") ? "Active" : "Inactive";
    }
}); document.add

