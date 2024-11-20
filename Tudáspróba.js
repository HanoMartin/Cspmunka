function vizsgálás() {
    let helyesszámlaló = 0;
  
    const valasz = [
      document.querySelector('input[name="v"]:checked')?.value,
      document.querySelector('input[name="v2"]:checked')?.value
    ];
  
    if (valasz[0] === undefined) {
      document.getElementById("visszai").innerText = "Kérlek válassz egy választ a kérdésre!";
      document.getElementById("visszai").style.color = "orange";  
    } else if (valasz[0] === "while") {  
      helyesszámlaló++;
      document.getElementById("visszai").innerText = "Helyes válasz!";
      document.getElementById("visszai").style.color = "green";  
    } else {  
      document.getElementById("visszai").innerText = "Helytelen válasz.";
      document.getElementById("visszai").style.color = "red";  
    }
  
    
    if (valasz[1] === undefined) {
      document.getElementById("visszaig2").innerText = "Kérlek válassz egy választ a kérdésre!";
      document.getElementById("visszaig2").style.color = "orange";  
    } else if (valasz[1] === "for") {  
      helyesszámlaló++;
      document.getElementById("visszaig2").innerText = "Helyes válasz!";
      document.getElementById("visszaig2").style.color = "green";  
    } else {  
      document.getElementById("visszaig2").innerText = "Helytelen válasz.";
      document.getElementById("visszaig2").style.color = "red"; 
    }
  
    
    const joValaszokSzama = 2; 
    if (helyesszámlaló === joValaszokSzama) {
      alert("Minden válasz helyes! Gratulálok!");
    } else {
      alert(`Összesen ${helyesszámlaló} helyes válasz.`);
    }
  }










