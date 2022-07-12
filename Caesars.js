/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the
letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded
string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str, decode="") {

let Alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(let i = 0; i < str.length ; i++){
   if(Alph.indexOf(str[i]) === -1){
      decode+= str[i] ;
   }
   else{
    let Rot13 = str[i].charCodeAt() -13;
    if( Rot13 < "A".charCodeAt()){
       Rot13 += 26;
    }
    decode += String.fromCharCode(Rot13);
   }
 }
 return decode;
}

rot13("SERR YBIR?");
