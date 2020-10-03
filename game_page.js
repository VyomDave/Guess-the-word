p1_name = localStorage.getItem("player1");
p2_name = localStorage.getItem("player2");
p1_score = 0;
p2_score = 0;
document.getElementById("p1_name").innerHTML=p1_name+" : ";
document.getElementById("p2_name").innerHTML=p2_name+" : ";
document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;
document.getElementById("qturn").innerHTML="Question Turn"+" : "+p1_name;
document.getElementById("aturn").innerHTML="Answer Turn"+" : "+p2_name;

function send(){
    getword = document.getElementById("wordinput").value
    qword = getword.toLowerCase()
    console.log(qword);

    letter1 = qword.charAt(1);
    console.log(letter1);
    replace1 = qword.replace(letter1,"_");
    console.log(replace1);

    x = Math.floor(qword.length/2)
    console.log(x);

    letter2 = qword.charAt(x)
    console.log(letter2);
    replace2 = replace1.replace(letter2," _");
    console.log(replace2);

    y = Math.floor(qword.length-1)
    console.log(y);

    letter3 = qword.charAt(y)
    console.log(letter3)
    replace3 = replace2.replace(letter3," _")
    console.log(replace3);


    qtag = "<h4 id='word_display'>Q."+replace3+" </h4>"
    atag = "<br>Answer:  <input type='text' id='input_check_box'>"
    buttontag = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>"
    row = qtag+atag+buttontag 
    document.getElementById("output").innerHTML=row;
    document.getElementById("wordinput").value= "";
}
aturn="p2"
qturn="p1"

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer)
    if (answer == qword){
        if (aturn == "p1"){
            p1_score = p1_score+1;
            aturn = "p2";
            qturn = "p1";
            document.getElementById("p1_score").innerHTML=p1_score;
            document.getElementById("qturn").innerHTML="Question Turn"+" : "+p1_name;
            document.getElementById("aturn").innerHTML="Answer Turn"+" : "+p2_name;

        }
        else {
            p2_score=p2_score+1;
            aturn = "p1";
            qturn = "p2";
            document.getElementById("p2_score").innerHTML=p2_score;
            document.getElementById("qturn").innerHTML="Question Turn"+" : "+p2_name;
            document.getElementById("aturn").innerHTML="Answer Turn"+" : "+p1_name;
        }
        document.getElementById("output").innerHTML="";
    }
}