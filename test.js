const angkaUnik = (angka) => {
    let nominal = angka+"";

    let hasilnya
    
    let nol3 = nominal.substring(nominal.length-3) //000
    let nol2 = nominal.substring(nominal.length-2) //00
    let nol1 = nominal.substring(nominal.length-1) //0
    
    let rand =  Math.floor(Math.random() * 9) + 1;
    let rand2 =  Math.floor(Math.random() * 9) + 1;
    let rand3 =  Math.floor(Math.random() * 9) + 1;
    
    (nol3 == '000') ? hasilnya = nominal.substring(0, nominal.length-3) + rand + rand2 + rand3
    : (nol2 == '00') ? hasilnya = nominal.substring(0, nominal.length-2) + rand + rand2
    : (nol1 == '0') ? hasilnya = nominal.substring(0, nominal.length-1) + rand
    : console.log("Anda salah input!")

    parseInt(nominal)

    return hasilnya
}