document.getElementById("clc-bangla").addEventListener("click", function(){

    const marksBangla = document.getElementById("input-bangla").value;


    if(marksBangla < 0){

        alert("You can't provide negative value");
    }
    else if(marksBangla >= 80 && marksBangla <= 100){

        document.getElementById("grade-bangla").innerText = "A+";
    }
    else if(marksBangla >= 70 && marksBangla <= 79){

        document.getElementById("grade-bangla").innerText = "A";
    }
    else if(marksBangla >= 60 && marksBangla <= 69){

        document.getElementById("grade-bangla").innerText = "A-";
    }
    else if(marksBangla >= 50 && marksBangla <= 59){

        document.getElementById("grade-bangla").innerText = "B";
    }
    else if(marksBangla >= 40 && marksBangla <= 49){

        document.getElementById("grade-bangla").innerText = "C";
    }
    else if(marksBangla >= 33 && marksBangla <= 39){

        document.getElementById("grade-bangla").innerText = "D";
    }
    else {

        document.getElementById("grade-bangla").innerText = "F";
    }


});




document.getElementById("clc-english").addEventListener("click", function(){

    const marksEnglish = document.getElementById("input-english").value;


    if(marksEnglish < 0){

        alert("You can't provide negative value");
    }
    else if(marksEnglish >= 80 && marksEnglish <= 100){

        document.getElementById("grade-english").innerText = "A+";
    }
    else if(marksEnglish >= 70 && marksEnglish <= 79){

        document.getElementById("grade-english").innerText = "A";
    }
    else if(marksEnglish >= 60 && marksEnglish <= 69){

        document.getElementById("grade-english").innerText = "A-";
    }
    else if(marksEnglish >= 50 && marksEnglish <= 59){

        document.getElementById("grade-english").innerText = "B";
    }
    else if(marksEnglish >= 40 && marksEnglish <= 49){

        document.getElementById("grade-english").innerText = "C";
    }
    else if(marksEnglish >= 33 && marksEnglish <= 39){

        document.getElementById("grade-english").innerText = "D";
    }
    else {

        document.getElementById("grade-english").innerText = "F";
    }


});

document.getElementById("clc-ict").addEventListener("click", function(){

    const marksIct = document.getElementById("input-ict").value;


    if(marksIct < 0){

        alert("You can't provide negative value");
    }
    else if(marksIct >= 80 && marksIct <= 100){

        document.getElementById("grade-ict").innerText = "A+";
    }
    else if(marksIct >= 70 && marksIct <= 79){

        document.getElementById("grade-ict").innerText = "A";
    }
    else if(marksIct >= 60 && marksIct <= 69){

        document.getElementById("grade-ict").innerText = "A-";
    }
    else if(marksIct >= 50 && marksIct <= 59){

        document.getElementById("grade-ict").innerText = "B";
    }
    else if(marksIct >= 40 && marksIct <= 49){

        document.getElementById("grade-ict").innerText = "C";
    }
    else if(marksIct >= 33 && marksIct <= 39){

        document.getElementById("grade-ict").innerText = "D";
    }
    else {

        document.getElementById("grade-ict").innerText = "F";
    }


});

document.getElementById("clc-total").addEventListener("click", function(){

    

    const marksBangla = document.getElementById("input-bangla").value;
    const marksEnglish = document.getElementById("input-english").value;
    const marksIct = document.getElementById("input-ict").value;

    const banglaMarksParse = parseFloat(marksBangla);
    const englishMarksParse = parseFloat(marksEnglish);
    const ictMarksParse = parseFloat(marksIct);

    const totalMarks = banglaMarksParse + englishMarksParse + ictMarksParse;

    document.getElementById("total-marks").innerText = totalMarks;

    const totalgrade = totalMarks / 3;


    if(totalgrade >= 80 && totalgrade <= 100){

        document.getElementById("grade-total").innerText = "A+";
    }
    else if(totalgrade >= 70 && totalgrade <= 79){

        document.getElementById("grade-total").innerText = "A";
    }
    else if(totalgrade >= 60 && totalgrade <= 69){

        document.getElementById("grade-total").innerText = "A-";
    }
    else if(totalgrade >= 50 && totalgrade <= 59){

        document.getElementById("grade-total").innerText = "B";
    }
    else if(totalgrade >= 40 && totalgrade <= 49){

        document.getElementById("grade-total").innerText = "C";
    }
    else if(totalgrade >= 33 && totalgrade <= 39){

        document.getElementById("grade-total").innerText = "D";
    }
    else {

        document.getElementById("grade-total").innerText = "F";
    }


    
})

// document.getElementById("clc-total").addEventListener("click", function(){

//     const bangla = document.getElementById("input-bangla").value;


//     console.log(bangla);


// });