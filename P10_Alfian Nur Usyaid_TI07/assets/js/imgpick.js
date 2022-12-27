function hewan() {
    let img = document.getElementById("imgpick").value;
    let hewan = document.getElementById("hewan");
    let pick;

    if (img == "Elang") {
        hewan.src = 'assets/img/elang.jpg'
        alert("Ini gambar Elang")
    } else if (img == "Gorila") {
        hewan.src = 'assets/img/gorila.jpg'
        alert("Ini gambar Gorila")
    } else if (img == "Singa") {
        hewan.src = 'assets/img/singa.jpg'
        alert("Ini gambar Singa")
    }
}