export default function preciscenaKosaricaUporabnika() {
    let vpisanUporabnik = JSON.parse(localStorage.getItem('vpisanUporabnik'));
    let prikazano = JSON.parse(localStorage.getItem('uporabnikZgodovina'));
    let stevilkaNarocila = [];
    let preteklaNarocila = [];

    for (let i = 0; i <= prikazano.length - 1; i++) {
        if (prikazano[i].username === vpisanUporabnik.username) {
            stevilkaNarocila.push(prikazano[i].id)
        }
    }

    for(let y = 0; y <= stevilkaNarocila.length - 1; y++) {
        for (let i = 0; i <= prikazano.length - 1; i++) {
            if (prikazano[i].id == stevilkaNarocila[y]) {
                preteklaNarocila.push(prikazano[i])
            }
        }
    }
    let preciscenoNarocilo = preteklaNarocila.filter(function (el) {
        return el != null;
    });
    console.log(preciscenoNarocilo)
    localStorage.setItem('zgodovinaKosarice', JSON.stringify(preciscenoNarocilo));
}