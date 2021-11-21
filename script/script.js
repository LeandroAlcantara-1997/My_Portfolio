function load(){
    let h = document.getElementsByTagName('header')
    let m = document.getElementsByTagName('main')
    let f = document.getElementsByTagName('footer')
    let p = document.getElementById('loading')
    let cont = 0
        p.textContent = cont;
        cont ++;
    }
    h.style.display = 'block'
    m.style.display = 'block'
    f.style.display = 'block'
    window.alert("saiu")
}