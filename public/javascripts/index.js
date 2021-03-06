"use strict";

function refresh() {
    // Fetch from /api
    fetch('/api').then(function(response) {
        // Convert to json
        return response.json();
    }).then(function(response) {
        // Remove current <tr>s
        document.querySelectorAll("tbody tr").forEach((tr) => {
            document.querySelector("tbody").removeChild(tr);
        });

        // Add new <tr>s
        response.forEach(entry => {
            var tr = document.createElement('tr');
            tr.innerHTML = "<td>" + entry.id + "</td>" +
                "<td>" + entry.location + "</td>" +
                "<td>" + entry.count + "</td>" +
                "<td>" + entry.date + "</td>";

            document.querySelector("tbody").appendChild(tr);
        });
    }).catch(function(err) {
        // Catch on error
        console.error(err);
    });
}

refresh();
setInterval(refresh, 500);