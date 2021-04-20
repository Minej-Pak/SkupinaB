export default function preveriVpisanega(data) {
    let uporabniki = JSON.parse(localStorage.getItem('data'));
    if (uporabniki === null || data.email ===null || data.password ===null) {
        alert("Uporabnik ne obstaja.")
    } else {
        for (let i = 0; i <= uporabniki.length; i++) {
            if (data.email === uporabniki[i].email && data.password === uporabniki[i].password) {
                window.location.href = "/";
            } else {
                alert("Vnešeni podatki so nepravilni.")
            }
        }
    }
}