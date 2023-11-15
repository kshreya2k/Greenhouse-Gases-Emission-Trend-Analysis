
    function showTable(tableType) {
        if (tableType === 'co2') {
            $('#co2Table').show();
            $('#o3Table').hide();
        } else if (tableType === 'o3') {
            $('#co2Table').hide();
            $('#o3Table').show();
        }
    }

    function filterTable(tableType) {
        var input, filter, table, tr, td, i, txtValue;
        if (tableType === 'co2') {
            input = document.getElementById("co2Input");
            table = document.getElementById("co2MyTable");
        } else if (tableType === 'o3') {
            input = document.getElementById("o3Input");
            table = document.getElementById("o3MyTable");
        }

        filter = input.value.toUpperCase();
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0]; // Change index based on the column you want to filter
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function sortTable(n, tableType) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        if (tableType === 'co2') {
            table = document.getElementById("co2MyTable");
        } else if (tableType === 'o3') {
            table = document.getElementById("o3MyTable");
        }

        switching = true;
        dir = "asc";

        while (switching) {
            switching = false;
            rows = table.rows;

            for (i = 1; i < rows.length - 1; i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i + 1].getElementsByTagName("td")[n];

                if (dir === "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

