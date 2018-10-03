//1-sleepin
function sleep_in(weekday, vacation){
    if(weekday == true&&vacation == false){
        return false;
    }else{
        return true;
    }

}
//2-monkeytrouble
function monkey_trouble(a,b){
    if(a == b){
        return true;
    }else{
        return false;
    }
}
//3-stringtimes
function string_times(x,y){
    var times = x.repeat(y);
    return times;
}
//4-fronttimes
function front_times(x,y){
    var firstThree = x.substring(0,3);
    if(firstThree == -1){
        x.repeat(y);
    }else {
        var times = firstThree.repeat(y);
        return times;
    }
}
//5-stringbits
function string_bits(x){
    var answer = "";
    for(var i = 0; i<x.length; i+=2){
        answer = answer + x[i];
    }
    return answer;
}
//6-caught_speeding
function caughtSpeeding(speed,birthday){
    var answer="";
    if(speed<=60 && birthday==false){
        answer=answer+"0";
    }else if (speed>60 && speed<=80 && birthday==false){
        answer=answer+"1";
    }else if (speed>80 && birthday==false){
        answer=answer+"2";
    }else if(speed<=65 && birthday==true){
        answer=answer+"0";
    }else if (speed>65 && speed<=85 && birthday==true){
        answer=answer+"1";
    }else if (speed>85 && birthday==true){
        answer=answer+"2";
    }
    return answer;
}
//7-fizz_buzz
function fizz_buzz(x){
     var answer = "";
     if(x%3==0 && x%5==0){
         answer = answer + "FizzBuzz";
     }
     else if(x%3==0){
         answer = answer + "Fizz";
     }else if(x%5==0){
         answer = answer + "Buzz";
     }else{
         answer = answer + x + "!";
     }
     return answer;
}
//8-tea_party
function teaParty(tea, candy){
    var answer = "";
    if(tea>=5 && candy >= 5){
        if(tea>=candy*2 || candy>=tea*2){
            answer = answer + 2;
        }else{
            answer = answer + "1";
        }
    }else{
        answer = answer + "0";
    }
    return answer;
}
//9-blackjack
function blackjack(x,y){
    var answer = "";
    if(x>y && x<=21){
        answer = answer + x;
    }else if(x>21 && y<21){
        answer = answer + y;
    }else if(y>21 && x<21) {
        answer = answer + x;
    }else if(x>y && x<=21){
        answer = answer + y;
    }else if(y>x && y<=21) {
        answer = answer + y;
    }else if(x>y && x<=21) {
        answer = answer + x;
    }else if(x > 0 && y > 0){
        answer = answer + "0";
    }
    return answer;
}
//10-lonesum
function loneSum(a,b,c){
    var answer = "";
    var abc = (a+b+c);
    if(a!=b && a!=c && b!=c){
        answer = answer + abc;
    }else if(a == b && b != c){
        answer = answer + c
    }else if(a==c && c != b){
        answer = answer + b;
    }else if(b ==c && b != a){
        answer = answer + a;
    }else{
        answer = answer + "0";
    }
    return answer;
}
