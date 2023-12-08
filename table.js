function modifyTable() {
    var table = document.getElementById("mytable");

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {
            if (cell.innerHTML.trim() === "") {
                cell.style.backgroundColor = "#E6EDED";
            }
        }
    }
}