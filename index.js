function calculateLove(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;

    var loveScore=Math.floor(Math.random()*100+1);
    var score=document.getElementById("score");
    score.innerHTML=loveScore+ "%";
    var result=document.getElementById("result");
    result.innerHTML ="The love score between " + name1 +" and " + name2 + " is " + loveScore + "%.";

if(loveScore>=85){
    result.innerHTML +=" Your love is like Romeo ❤️ Juliet.";
}else if(loveScore<50){
    result.innerHTML +=" Your love is like oil & water👎.";
}else if(loveScore>=50 && loveScore<85){
    result.innerHTML +=" You love🤗 each other.";
}

}