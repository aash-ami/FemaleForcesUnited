fetch("/header-menu.html", { method: "GET" })
    .then(function (response) {
        return response.text();
    }).then(function (data) {
        document.getElementById("headermenu").innerHTML = data;
    });