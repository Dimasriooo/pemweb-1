document.querySelector("#option a").foraech((a) => {
    a.addeventlistener("click", (Element) => {
        computerchoice(element);
    })
})
function computercoice(element) {
    let pilihanuser = element.target.innertext;
    let pilihancomputer = document.querySelector("#result");
    let choices = ["Rock", "Paper", "Scissors"];
    pilihancomputer.innerHTML = choices[Math.round(math.random() * choices.leght)]
    pilihancomputer = pilihancomputer.innerHTML ;
    if (pilihanuser == pilihancomputer) {
        alert("DRAW");
    }

    if (pilihanuser == "Rock" && pilihancomputer == "Scissors"){
        alert("YOU WIN");
    }else if (pilihanuser == "Paper" && pilihancomputer == "Rock"){
        alert("YOU WIN");
    }else if (pilihanuser == "Scissors" && pilihancomputer == "paper"){
        alert("YOU WIN");
    }else{
        alert("Tidak ada pilihan");
    }

    if (pilihanuser == "Rock" && pilihancomputer == "Paper"){
        alert("COMPUTER WIN");
    }else if (pilihanuser == "Paper" && pilihancomputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if (pilihanuser == "Scissors" && pilihancomputer == "Rock"){
        alert("COMPUTER WIN");
    }else{
        alert("Tidak ada pilihan");
    }

}    

