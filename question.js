let questions = [
    {
        ask: "ABC",
        answer: "A"
    },{
        ask: "DEF",
        asnwer: "D"
    }
];

for(let i = 0; i < questions.length; i++){
    let input = prompt(quistions[i].ask);
    if(input == questions[i].answer){
        alert("答對了!");
    }
    else{
        alert("答錯了!");
    }

}