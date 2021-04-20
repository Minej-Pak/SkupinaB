let uporabniki= []

function posodobiLocalStorage(data){
    localStorage.setItem("data",JSON.stringify(data))
}

export default function shraniUporabnika(data) {
    let seznamUporabnikov = JSON.parse(localStorage.getItem('data'));
    if(seznamUporabnikov === null) {
        uporabniki.push(data)
        posodobiLocalStorage(uporabniki)
        window.location.href = "/";
    }else {
        for (let i = 0; i <= seznamUporabnikov.length; i++) {
            if (data.username === seznamUporabnikov[i].username || data.email === seznamUporabnikov[i].email) {
                console.log("username or email already exists")
            } else {
                seznamUporabnikov.push(data)
                posodobiLocalStorage(seznamUporabnikov)
                window.location.href = "/";
            }
            return true;
        }
    }
}
