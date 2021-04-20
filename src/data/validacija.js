import shraniUporabnika from "@/data/shraniUporabnika";

export default function preveriUporabnika(data) {
    if (data.password === data.password_confirm) {
        if (data.username.length <= 4 || data.username.length >= 15 || data.username.indexOf(' ') >= 0) {
            alert("Uporabniško ime mora biti daljše od 4 znakov in krajše od 15 znakov, prav tako ne sme vsebovati presledkov.")
        } else {
            shraniUporabnika(data);
        }
    } else {
        alert("Gesli se ne ujemata");
    }
}