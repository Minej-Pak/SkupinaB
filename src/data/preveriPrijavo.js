var vpisanUporabnik = [];
var uporabnikVpisan = false;
export default function preveriVpisanega(data) {
    let uporabniki = JSON.parse(localStorage.getItem('data'));
    if (uporabniki === null ||  data.username ===null ||  data.email ===null || data.password ===null) {
        alert("Uporabnik ne obstaja.")
    } else {
        for (let i = 0; i <= uporabniki.length; i++) {
            if (data.username === uporabniki[i].username &&data.email === uporabniki[i].email && data.password === uporabniki[i].password) {
                vpisanUporabnik = data;
                uporabnikVpisan = true;
                break;
            } else {
                alert("Vnešeni podatki so nepravilni.")
            }
        }
    }
    if(uporabnikVpisan) {
        localStorage.setItem("vpisanUporabnik", JSON.stringify(vpisanUporabnik));
        window.location.href = "/";
    }
}