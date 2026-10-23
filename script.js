let totalAmount = 0;
const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

addButton.addEventListener("click", function () {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
  
    if (amount <= 0 || date === "") {
        alert("Please enter a valid amount and date.");
        return;
    }
    
    const row = document.createElement("tr");
   const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    const amountCell = document.createElement("td");
    amountCell.textContent = amount;
    const dateCell = document.createElement("td");
    dateCell.textContent = date;
     const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
     
    deleteButton.addEventListener("click", function () {
        totalAmount -= amount;
        totalAmountCell.textContent = totalAmount;
        row.remove();
    });
    deleteCell.appendChild(deleteButton);
   
    row.appendChild(categoryCell);
    row.appendChild(amountCell);
    row.appendChild(dateCell);
    row.appendChild(deleteCell);
  expenseTableBody.appendChild(row);
   totalAmount += amount;
    totalAmountCell.textContent = totalAmount;
    amountInput.value = "";
    dateInput.value = "";
});