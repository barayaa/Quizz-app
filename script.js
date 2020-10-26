const qcm =document.querySelector('.qcm');
const category =document.querySelector('.categorie');
const diff=document.querySelector('.diff');
const choix = document.querySelector('.choicetext');
const scoreBoard = document.querySelector('.score');
const scoremoinsBoard = document.querySelector('.scoreMoins');
const check = document.querySelector('.CHECK');
const del = document.querySelector('.del');

let score =0;
let scoremoins =0;


function a(){
    fetch("https://opentdb.com/api.php?amount=1")
.then(answer => {
    return answer.json()})
.then(Amie=> {
    console.log(Amie.results); 

    var k = Amie.results[0].incorrect_answers.length;
    var rand = Math.round(Math.random() * k + 1);
    qcm.innerHTML = Amie.results[0].question
    category.innerHTML ='Category : &nbsp;'+ Amie.results[0].category;
    diff.innerHTML ='Difficulty: ' + Amie.results[0].difficulty;
    for (var i = 0; i <= k; i++) {
        if (i == rand) {
            choix.innerHTML += '<div class="qstcontent">' + Amie.results[0].correct_answer + '</div>'
        } else {
            choix.innerHTML += '<div class="qstcontent">' + Amie.results[0].incorrect_answers[i] + '</div>'
        }
    }


    choix.addEventListener('click', function(e){
            var clr = e.target.innerHTML;
            console.log(e.target)
            if(clr == Amie.results[0].correct_answer){
                score++;
                scoreBoard.textContent = score;
            }else{
                scoremoins++;
                scoremoinsBoard.textContent = scoremoins;
            } 
        })
    })

}

check.addEventListener('click',function(){
    choix.textContent =''
    a()
})

del.addEventListener('click',function(){
    choix.textContent = ''
})

/*
function generatequestion(){
    question = 4;
    let tab=[]

    let a = Amie.results[0].incorrect_answers[0];
    let b = Amie.results[0].incorrect_answers[1];
    let c = Amie.results[0].incorrect_answers[2];
    let d =Amie.results[0].correct_answer;

    let arondi = Math.floor(Math.random()*4);
    tab.push(a,b,c,d);

    for(i=0; i< couleur; i++){
        choix[i].innerHTML=tab[arondi];
    }
    

    console.log(choix);   
    
        for(i=0; i < tab.length; i++){
            color[i].addEventListener('click', function(e){
            var clr= e.target.style.backgroundColor;
            if(tab[choix] ==clr ){
                gameHeader.style.backgroundColor= tab[choix];
                win.textContent='😇 Bingo!';
                win.style.display='block';
                loose.style.display='none';  
                for (i=0; i < couleur; i++) {
                    color[i].style.opacity= '1'
                    color[i].style.backgroundColor = tab[choix];
                    
                }
            }else{
                e.target.style.opacity='0'
                loose.textContent='😬 Wrong!';
               
            }
            })
        
        }
}

generatequestion();
*/
 /*
    const repond = Amie.results[0].incorrect_answers.splice(1, 0, Amie.results[0].correct_answer);
    console.log(repond);


      
    let tab=[]
    let a = Amie.results[0].incorrect_answers[0];
    let b = Amie.results[0].incorrect_answers[1];
    let c = Amie.results[0].incorrect_answers[2];
    let d =Amie.results[0].correct_answer;
    tab.push(a,b,c,d);
 
    let arondi = Math.floor(Math.random()*4);
   
    
    for(i=0; i< tab.length; i++){
       choix[i].innerHTML = tab[i]
    }

*/
