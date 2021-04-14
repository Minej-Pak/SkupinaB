export default class Uporabnik {
    constructor(novUporabnik) {
        let { ime, uporabniskoIme, geslo } = novUporabnik;
        this.geslo = geslo
        this.imeStarsa = ime || 'neznan'
        this.uporabniskoIme = uporabniskoIme
    }
}



