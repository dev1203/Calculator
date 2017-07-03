/**
 * Created by dev on 6/24/17.
 */
var i=0;
var j=0;
var k="";
var ans=0;
function dis(x){
    frm.txt.value=frm.txt.value+x;
    j=frm.txt.value
}
function divide(){
    i=j;
    j=0;
    frm.txt.value="";
    k="Divide";
}
function multiply(){
    i=j;
    j=0;
    frm.txt.value="";
    k="Multiply";
}
function plus(){
    i=j;
    j=0;
    frm.txt.value="";
    k="Plus";
}
function minus(){
    i=j;
    j=0;
    frm.txt.value="";
    k="Minus";
}
function ac(){

    i=0;
    j=0;
    k="";
    ans=0;
    frm.txt.value="";
    document.getElementById('main').innerHTML="";

}
function eq(){
    if (k == "Divide") {
        console.log(i);
        console.log(j);
        ans = i/j;

    }
    else if(k=="Multiply" ){
        ans=i*j;
    }
    else if(k=="Plus" ){
        ans=i+j;
    }
    else if(k=="Minus" ){
        ans=i-j;
    }
    document.getElementById('main').innerHTML=ans;
}
// console.log(i);