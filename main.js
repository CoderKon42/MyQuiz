let trueornotone = true;
let trueornottwo = false;
let trueornotthree = true;
let trueornotfour = false;
let conterFragen = 1;
let richtige = 0;
let wasntincreased = true;
let isRight = (para) => {
    if (para == true) {
        if (wasntincreased) {
            richtige += 1;
            wasntincreased = false;
        }
        document.getElementById("output").innerHTML = "korrekt!";
        document.getElementById("richtigbeantwortete").innerHTML = richtige;
        document.getElementById("gesamt").innerHTML = conterFragen;
    } else if (para == false) {
        document.getElementById("output").innerHTML = "falsch!";
        document.getElementById("richtigbeantwortete").innerHTML = richtige;
        document.getElementById("gesamt").innerHTML = conterFragen;
        if (wasntincreased) {
            wasntincreased = false;
        }
    }
}

let nächsteFrage = () => {

    if (conterFragen === 1) {
        wasntincreased = true;
        conterFragen += 1
        document.getElementById("question").innerHTML = 'Welche Form hat die Erde?'
        document.getElementById("answerone").innerHTML = "pyramidisch"
        document.getElementById("answertwo").innerHTML = "rund"
        document.getElementById("answerthree").innerHTML = "quadratisch"
        document.getElementById("answerfour").innerHTML = "Scheibe"
        document.getElementById("output").innerHTML = "";
        trueornotone = false;
        trueornottwo = true;
        trueornotthree = false;
        trueornotfour = false;
    } else if (conterFragen === 2) {
        wasntincreased = true;
        conterFragen += 1
        document.getElementById("question").innerHTML = 'Wo steht der schiefe Turm von Pisa?'
        document.getElementById("answerone").innerHTML = "Pisa"
        document.getElementById("answertwo").innerHTML = "Rom"
        document.getElementById("answerthree").innerHTML = "Paris"
        document.getElementById("answerfour").innerHTML = "Stockholm"
        document.getElementById("output").innerHTML = "";
        trueornotone = true;
        trueornottwo = false;
        trueornotthree = false;
        trueornotfour = false;
    } else if (conterFragen === 3) {
        wasntincreased = true;
        conterFragen += 1
        document.getElementById("question").innerHTML = 'Wie heißt Müller (FCB-Fußball) mit Vornamen?'
        document.getElementById("answerone").innerHTML = "Robert"
        document.getElementById("answertwo").innerHTML = "Sigfried"
        document.getElementById("answerthree").innerHTML = "Thomas"
        document.getElementById("answerfour").innerHTML = "Hildegart"
        document.getElementById("output").innerHTML = "";
        trueornotone = false;
        trueornottwo = false;
        trueornotthree = true;
        trueornotfour = false;
    } else if (conterFragen === 4) {
        wasntincreased = true;
        conterFragen += 1
        document.getElementById("question").innerHTML = 'Welche Gruppe ist für "Hallo Welt" bekannt?'
        document.getElementById("answerone").innerHTML = "Schwimmer"
        document.getElementById("answertwo").innerHTML = "Bergsteiger"
        document.getElementById("answerthree").innerHTML = "Programmier"
        document.getElementById("answerfour").innerHTML = "Tote"
        document.getElementById("output").innerHTML = "";
        trueornotone = false;
        trueornottwo = false;
        trueornotthree = true;
        trueornotfour = false;
    } else {
        let percenteval = eval(richtige / conterFragen);
        let percentArr = Array.from(String(percenteval));
        if (percentArr[4] >= 0.5) {
            percentArr[3] + 1;
        }
        let percent;
        if (percentArr[3] != undefined) {
            percent = String(percentArr[2]) + String(percentArr[3])
        } else {
            percent = String(percentArr[2]) + "0"
        }


        if (percenteval === 0) {
            document.getElementById("question").innerHTML = `Quiz vorbei! du hast ${richtige} von ${conterFragen} richtig beantwortet! Das sind  0%! Da hat selst der Zufall einen höheren Erwartungswert!`
            document.getElementById("answerone").innerHTML = ""
            document.getElementById("answertwo").innerHTML = ""
            document.getElementById("answerthree").innerHTML = ""
            document.getElementById("answerfour").innerHTML = ""
            document.getElementById("output").innerHTML = "";
        } else if (percenteval < 0.5) {
            document.getElementById("question").innerHTML = `Quiz vorbei! du hast ${richtige} von ${conterFragen} richtig beantwortet! Das sind  ${percent}%! Das kannst du besser!`
            document.getElementById("answerone").innerHTML = ""
            document.getElementById("answertwo").innerHTML = ""
            document.getElementById("answerthree").innerHTML = ""
            document.getElementById("answerfour").innerHTML = ""
            document.getElementById("output").innerHTML = "";
        } else if (percenteval < 1) {
            document.getElementById("question").innerHTML = `Quiz vorbei! du hast ${richtige} von ${conterFragen} richtig beantwortet! Das sind  ${percent}%! Das ist ordentlich!`
            document.getElementById("answerone").innerHTML = ""
            document.getElementById("answertwo").innerHTML = ""
            document.getElementById("answerthree").innerHTML = ""
            document.getElementById("answerfour").innerHTML = ""
            document.getElementById("output").innerHTML = "";
        } else if (percenteval === 1) {
            document.getElementById("question").innerHTML = `Quiz vorbei! du hast ${richtige} von ${conterFragen} richtig beantwortet! Das sind  100%! sehr gut!`
            document.getElementById("answerone").innerHTML = ""
            document.getElementById("answertwo").innerHTML = ""
            document.getElementById("answerthree").innerHTML = ""
            document.getElementById("answerfour").innerHTML = ""
            document.getElementById("output").innerHTML = "";
        }
    }
}