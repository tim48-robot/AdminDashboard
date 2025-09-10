const rows = document.querySelectorAll(".dashboard-row");
const topDashboard = document.querySelector("#dashboard-dashboard")
const allSpan = document.querySelectorAll("span");

rows.forEach(currentRow => {
    currentRow.addEventListener("click", () => {
        rows.forEach(row => row.classList.remove('active'));
        currentRow.classList.add('active');
        
        allSpan.forEach(eachSpan => eachSpan.classList.remove("active"));
        const span = currentRow.querySelector('span');
        span.classList.add("active");
    });
});

topDashboard.addEventListener("click", () => {
    const span = topDashboard.querySelector('span');   
    allSpan.forEach(eachSpan => eachSpan.classList.remove("active"));
    rows.forEach(row => row.classList.remove('active'));
    span.classList.add("active")
})