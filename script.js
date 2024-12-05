  document.addEventListener("DOMContentLoaded", () => {
    const quantityInputs = document.querySelectorAll(".quantity");
    const totalPriceElement = document.getElementById("total-price");
    const dayTypeSelector = document.getElementById("day-type");

    quantityInputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
    });

    dayTypeSelector.addEventListener("change", calculateTotal);

    function calculateTotal() {
        let total = 0;
        const isWeekend = dayTypeSelector.value === "weekend";

        quantityInputs.forEach(input => {
            const quantity = parseInt(input.value) || 0;
            const row = input.closest("tr");
            const price = isWeekend
                ? parseFloat(row.children[2].dataset.price) 
                : parseFloat(row.children[1].dataset.price); 

            total += quantity * price;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }
});
