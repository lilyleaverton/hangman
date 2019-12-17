

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var word = "help" ;
var dWord = "";
var guessedLetters = [];
var guesses = 5;


function pickWord(level, catagory) {
    var words = [] ;
    if(catagory==1) {
        if(level==1) {
            words = ["mexico", "france", "japan", "spain", "brazil"] ;
        }
        if(level==2) {
            words = ["philippines", "australia", "kenya", "argentina", "bolivia"] ;
        }
        if(level==3) {
            words = ["zimbabwe", "venezuela", "malaysia", "qatar", "kazakhstan"] ;
        }
    }
    if(catagory==2) {
        if(level==1) {
            words = ["egg", "bread", "oatmeal", "bagel", "noodles"] ;
        }
        if(level==2) {
            words = ["salmon", "salami", "calamari", "caviar", "papaya"] ;
        }
        if(level==3) {
            words = ["zucchini", "falafel", "ceviche", "molasses", "tripe"] ;
        }
    }
    if(catagory==3) {
        if(level==1) {
            words = ["key", "knife", "broom", "lamp", "fan"] ;
        }
        if(level==2) {
            words = ["couch", "microwave", "carpet", "dresser", "mirror"] ;
        }
        if(level==3) {
            words = ["refrigerator", "dryer", "tupperware", "wardrobe", "treadmill"] ;
        }
    }
    var num = Math.floor(Math.random() * words.length) ;
    var nword = words[num];
    return nword ;
}

function guessN(level) {
    var nguesses = 0 ;

    if(level==1) {
        nguesses = 10 ;
    }
    if(level==2) {
        nguesses = 8 ;
    }
    if(level==3) {
        nguesses = 6 ;
    }
    return nguesses;
}

function startGame() {

    var level = document.getElementById("level").value ;
    console.log(level) ;
    var category = document.getElementById("category").value ;
    console.log(level) ;
    console.log(category) ;


    document.getElementById("buttons").innerHTML = "" ;
    addButtons() ;
    guesses = guessN(level) ;
    console.log(guesses) ;
    word = pickWord(level, category) ;
    console.log(word) ;

    var str = "" ;
    for(var i=0; i<word.length; i++) {
        str += "_ " ;
    }

    document.getElementById("img").src = "img/hangman1.svg" ;
    document.getElementById("output").style.color = "white";
    document.getElementById("output").innerHTML = str ;
    document.getElementById("guesses").innerHTML = "You have " +  guesses + " guesses left!" ;
    guessedLetters = [] ;
    document.getElementById("win").innerHTML = "" ;
}

function addButtons() {
    var btn;
    var div = document.getElementById("buttons");

    for(var i=0; i<letters.length; i++) {
        btn = document.createElement("button");

        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",letters[i]);
        btn.setAttribute("onclick","guessLetter(this)");
        //later put this into your css, not here
        // btn.style.backgroundColor = "black";
        // btn.style.color = "white" ;
        // btn.style.margin = "5px" ;
        // btn.style.border = "black";
        // btn.style.padding = "5px";
        // btn.style.size = "20px" ;


        btn.innerHTML = letters[i];

        div.appendChild(btn) ;

    }
}

function guessLetter(button) {

    if(guesses>0) {
        console.log(button);
        var win = "" ;
//    document.getElementById("output").innerHTML = button.value;
        if (checkArr == true) {

        } else {
            guessedLetters += button.value;
            console.log(guessedLetters);
            document.getElementById("output").innerHTML = printWord(word, guessedLetters);
        }
        guesses -= 1;
        if (word.indexOf(button.value) != -1) {
            guesses += 1;
        }
        button.setAttribute("disabled", "disabled");
        document.getElementById("img").src = getimg();

        document.getElementById("guesses").innerHTML = "You have " + guesses + " guesses left!";

        if (dWord.indexOf("_") == -1) {
            win = true;
            document.getElementById("guesses").innerHTML = "Congratulations! You Won!";
            document.getElementById("output").style.color = "#33cc33" ;
        }

        if (guesses == 0) {
            win = false;
            document.getElementById("guesses").innerHTML = "You lose :(";
            document.getElementById("output").innerHTML = word ;
            document.getElementById("output").style.color = "#ff0000" ;
        }

    }

    if(guesses<1 || win==true){
        disableButtons() ;
    }
}

function checkArr(a, arr) {
    for(var i=0; i<arr.length; i++) {
        if(a==arr[i]){
            return true ;
        } else {
            return false ;
        }
    }
}

function printWord() {
    var answer = "" ;
    for(var i=0; i<word.length; i++) {
        if(guessedLetters.indexOf(word[i])>-1){
        //if(letterInWord(guessedLetters, word)==true) {
            answer += word[i] ;
        } else {
            answer += "_ " ;
        }
    }
    dWord = answer;
    return answer ;
}

function disableButtons() {
    var button = document.getElementsByClassName("ltrBtn");
    for(var i=0; i<button.length; i++) {
        button[i].disabled = true ;
    }
}

function getimg() {
    var src = "" ;
    if(guesses>5) {
        src = "img/hangman1.svg"
    }

    if(guesses==5) {
        src = "img/hangman2.svg"
    }

    if(guesses==4) {
        src = "img/hangman3.svg"
    }

    if(guesses==3) {
        src = "img/hangman4.svg"
    }

    if(guesses==2) {
        src = "img/hangman5.svg"
    }

    if(guesses==1) {
        src = "img/hangman6.svg"
    }

    if(guesses==0) {
        src = "img/hangman7.svg"
    }
    return src;
}
