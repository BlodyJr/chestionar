const questions = [ 
    

    {
        question: "Când este permisă depăşirea prin stânga a tramvaielor aflate în mers?", 
        answers: [

            {text: "A. atunci când drumul public este cu sens unic", correct: true},
            {text: "B.  când între şina de tramvai din dreapta şi marginea trotuarului nu există suficient spaţiu pentru depăşire", correct: true},
            {text: "C. în nicio situaţie.", correct: false},



        ]


    }, 
    {
        question: "Viteza se va reduce obligatoriu:",
        answers: [
            {text: "A. la trecerile pentru pietoni", correct: false},
            {text: "B. la semnalul polițistului de frontieră", correct: true},
            {text: "C. la intalnirea indicatorului „Cedează trecerea”.", correct: true},



        ]
    }, 

    {
        question: "Pentru care dintre situaţiile de mai jos se dispune reţinerea permisului de conducere?",
        answers: [
            {text: "A. pentru neacordarea priorităţii de trecere", correct: true},
            {text: "B. permisul de conducere este deteriorat", correct: true},
            {text: "C. permisul de conducere prezintă modificări, ştersături sau adăugiri.", correct: true},



        ]
    }, 
    {
        question: "La trecerea autovehiculelor cu regim de circulaţie prioritar, care au în funcţiune mijloacele de avertizare sonoră şi luminoasă de culoare albastră, sunteţi obligat: ",
        answers: [
            {text: "A. să reduceţi viteza", correct: true},
            {text: "B.  să circulaţi cât mai aproape de marginea drumului în sensul de deplasare", correct: true},
            {text: "C. să acordaţi prioritate de trecere.", correct: true},



        ]
    }, 
    {
        question: "În ce situaţie poate fi reţinut certificatul de înmatriculare al unui vehicul? ",
        answers: [
            {text: "A. autovehiculul are aplicate afişe publicitare", correct: false},
            {text: "B. datele din certificatul de înmatriculare nu concordă cu caracteristicile tehnice ale vehiculului", correct: true},
            {text: "C. deţinătorul nu face dovada încheierii asigurării auto de răspundere civilă.", correct: true},



        ]
    }, 
    {
        question: "Conduci un autovehicul acționat cu motor cu aprindere prin scânteie, dotat cu catalizator (dispozitiv antipoluant). Ce fel de benzine trebuie să folosești?",
        answers: [
            {text: "A. numai benzine fara plumb", correct: true},
            {text: "B. numai benzine aditive cu tetraetil de plumb", correct: false},
            {text: "C. orice fel de benzine cu cifra octanică peste 90", correct: false},



        ]
    }, 
    {
        question: "La folosirea pe termen lung a soluțiilor antigel, trebuie aplicate următoarele reguli:",
        answers: [
            {text: "A. după cel mult 3 ani soluția antigel va fi complet înlocuită, chiar dacă densitatea acesteia corespunde cerințelor", correct: true},
            {text: "B. se va urmări întotdeauna nivelul optim al lichidului din vasul de expansiune", correct: false},
            {text: "C. se va urmări culoarea lichidului din vasul de expansiune", correct: false},



        ]
    }, 
    {
        question: "Cursa liberă a pedalei de frână, mai mică decât cea obișnuită, indică:",
        answers: [
            {text: "A. un joc insuficient între saboți și tamburi", correct: true},
            {text: "B. pierderi de lichid pe la garnituri", correct: false},
            {text: "C. blocarea pedalei de frână", correct: false},



        ]
    }, 
    {
        question: "Ce factor influențează cel mai mult durata de serviciu a pneurilor?",
        answers: [
            {text: "A. starea tehnică a frânei", correct: false},
            {text: "B. temperatura mediului ambiant", correct: false},
            {text: "C. presiunea", correct: true},



        ]
    }, 
    {
        question: "Când este indicat să verificați presiunea din anvelope?",
        answers: [
            {text: "A. de regulă, înainte de a porni la drum", correct: true},
            {text: "B. numai pe timp de iarnă, când anvelopele sunt reci", correct: false},
            {text: "C. întotdeauna la 300km", correct: false},



        ]
    }, 
    {
        question: "Care este rolul bateriei de acumulatori?",
        answers: [
            {text: "A. alimentează consumatorii cu energie electrică", correct: true},
            {text: "B. asigură funcționarea instalației de răcire", correct: false},
            {text: "C. asigură funcționarea instalației de aprindere", correct: false},



        ]
    }, 
    {
        question: "Care este rolul uleiului pentru motor?",
        answers: [
            {text: "A. asigură demontarea mai ușoară a pieselor motorului", correct: false},
            {text: "B. reduce uzura motorului, prin crearea unui film rezistent de lubrifiant între suprafețele pieselor aflate în mișcare", correct: true},
            {text: "C. protejează motorul față de pătrunderea amestecului carburant în baia de ulei", correct: false},



        ]
    }, 
    {
        question: "Cum puteți folosi în condiții optime capacitatea de frânare a motorului, atunci când coborâți o pantă lungă și înclinată?",
        answers: [
            {text: "A. după schimbarea vitezei, aduceți imediat maneta în ", correct: false},
            {text: "B. schimbați într-o treaptă superioară", correct: false},
            {text: "C. schimbați la timp într-o treaptă inferioară", correct: true},



        ]
    }, 
    {
        question: "Care este rolul catalizatorului?",
        answers: [
            {text: "A. de a filtra carburantul înainte de pulverizarea acestuia în cilindri", correct: false},
            {text: "B. de a asigura depoluarea atmosferică, prin arderea completă a gazelor de evacuare", correct: true},
            {text: "C. de a facilita arderea amestecului carburant in cilindrii motorului", correct: false},



        ]
    }, 
    {
        question: "Ce semnifică cuvântul TUBELESS inscripționat pe anvelopă?",
        answers: [
            {text: "A. anvelopa poate funcționa fără cameră de aer", correct: true},
            {text: "B. secțiunea pneului are formă tubulară", correct: false},
            {text: "C. anvelopa este destinată folosirii pe vreme nefavorabilă", correct: false},



        ]
    }, 
    {
        question: "Ce deprindere greșită a conducătorului auto determină frecvent defectarea ambreiajului?",
        answers: [
            {text: "A. așteptarea la semafor având pedala de ambreiaj apăsată", correct: true},
            {text: "B. coborârea pantelor cu motorul oprit sau aducerea schimbătorului de viteze în punctul mort", correct: false},
            {text: "C. rularea cu jocuri mari la pedala de ambreiaj sau la mecanismul de direcție", correct: false},



        ]
    }, 
    {
        question: "Fumul de culoare neagră emis de eșapament indică:",
        answers: [
            {text: "A. un consum exagerat de ulei", correct: false},
            {text: "B. defectarea supapelor de evacuare", correct: false},
            {text: "C. un consum exagerat de combustibil", correct: true},



        ]
    }, 
    {
        question: "Criteriul de alegere a benzinei pentru motoarele cu aprindere prin scânteie îl constituie:",
        answers: [
            {text: "A. cifra cetanică (CC)", correct: false},
            {text: "B. cifra octanică (CO)", correct: true},
            {text: "C. culoarea și consistența", correct: false},



        ]
    }, 
    {
        question: "Ce indică efortul mai mare depus la acționarea pedalei de frână?",
        answers: [
            {text: "A. lipsa lichidului din instalația de frânare", correct: false},
            {text: "B. griparea cilindrilor receptori și a pistonașelor", correct: true},
            {text: "C. ruperea cablului frânei de staționare", correct: false},



        ]
    }, 
    {
        question: "Prezența calaminei pe suprafața bujiilor și fumul albăstrui al eșapamentului indică:",
        answers: [
            {text: "A. rularea frecventă cu o viteză inferioară limitei legale", correct: true},
            {text: "B. mecanismul motor (grup piston-cilindru) este uzat", correct: true},
            {text: "C. folosirea unor bujii necorespunzătoare", correct: true},



        ]
    }, 
    {
        question: "Care sunt situaţiile în care ar trebui redusă viteza?",
        answers: [
            {text: "A. la trecerea la nivel cu calea ferată curentă cu barieră", correct: true},
            {text: "B. la trecerea la nivel cu calea ferată curentă fără barieră", correct: false},
            {text: "C. la trecerea la nivel cu calea ferată curentă industrială.", correct: false},



        ]
    }, 
    {
        question: "Situaţiile în care nu se poate circula cu un autoturism sunt:",
        answers: [
            {text: "A. dacă se depăşeşte masa maximă admisă, înscrisă în certificatul de înmatriculare;", correct: true},
            {text: "B. dacă anvelopele sunt de mărimi şi caracteristici diferite faţă de cele înscrise pe certificat;", correct: true},
            {text: "C. dacă autovehiculul depăşeşte înălţimea înscrisă în certificatul de înmatriculare.", correct: false},



        ]
    }, 
    {
        question: "Care dintre vehicule nu are prioritate de trecere?",
        answers: [
            {text: "A. Vehiculele care se pun în mişcare faţă de cele care circulă pe drumul public;", correct: true},
            {text: "B. Vehiculul care coboară o pantă, faţă de cel care urcă, dacă sunt de aceeaşi categorie (şi unul trebuie să manevreze cu spatele);", correct: false},
            {text: "C. Vehiculele care execută virajul spre stânga, faţă de cele din sens opus.", correct: true},



        ]
    }, 
    {
        question: "Cum se semnalizează faptul că autovehiculul a rămas în pană pe partea carosabilă?",
        answers: [
            {text: "A. prin folosirea luminilor de poziţie;", correct: true},
            {text: "B. prin instalarea triunghiurilor reflectorizante şi prin folosirea luminilor de avarie;", correct: true},
            {text: "C. prin purtarea vestei reflectorizante.", correct: false},



        ]
    }, 
    {
        question: "Care dintre variantele de mai jos reprezinta calitati ale unui ulei de motor?",
        answers: [
            {text: "A. Punctul de congelare", correct: true},
            {text: "B. Culoarea", correct: false},
            {text: "C. Vascozitatea", correct: true},



        ]
    }, 
    {
        question: "Ce se intelege prin derapajul unui autovehicul?",
        answers: [
            {text: "A. Pierderea aderentei de catre roti", correct: true},
            {text: "B. devierea autovehiculului de la traiectoria impusa de pozitia valanului", correct: true},
            {text: "C. socul suspensiei pe drumurile denivelate", correct: false},



        ]
    }, 
    {
        question: "Ce va indica faptul ca bateria de acumulatori este descarcata ?",
        answers: [
            {text: "A. La aprinderea farurilor, intensitatea luminoasa a acestora scade progresiv ", correct: true},
            {text: "B. Actionand claxonul, acesta emite un sunet slab, intrerupt", correct: true},
            {text: "C. demontand bateria , constatati ca aceasta este mai usoara decar de obicei", correct: false},



        ]
    }




    

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    selectedAnswers = [];
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, answer) {
    if (selectedAnswers.includes(answer)) {
        selectedAnswers = selectedAnswers.filter(a => a !== answer);
        button.classList.remove("selected");
    } else {
        selectedAnswers.push(answer);
        button.classList.add("selected");
    }

    if (selectedAnswers.length > 0) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }
}

function nextQuestion() {
    let correctAnswers = questions[currentQuestionIndex].answers.filter(a => a.correct);
    let allCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(a => a.correct);

    if (allCorrect) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();


    questionElement.innerHTML = `Ai răspuns corect la ${score} din ${questions.length} întrebări.`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}




startQuiz();