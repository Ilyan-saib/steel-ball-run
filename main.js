/*for (let i = 0; i <= 10; i++) {
 console.log(i);  
}*/


//--------------------------------------------
/* for (let i = 1; i <= 100; i+=2) {
 console.log(i);
}*/


//----------------------------------------------
/*let n = 1
for (let i = 0; i < 10; i++) {

 console.log(n * 7)
 n++
}*/



//----------------------------------------------

/*function multi(y) {
  for (let x = 0; x <= 10; x++) {
 console.log(x * y)
  
}
}

console.log(multi(5));*/


//--------------------------------------------------------

/*function somme(n) {
  let total = 0
  for (let i = 0; i <= n ; i++) {
  total += i
    
  }
  return total;
}

console.log(somme(10));/*


//-------------------------------------------------

/*function facteur(number){
  let valeur1;

  let valeur2 = 1;

  for(valeur1 = 1; valeur1 <= number; valeur1++)  
  {
    valeur2*=valeur1;  
  }  
  return valeur2;
}

console.log(facteur(10));*/

//---------------------------------------------------


/*for (let i = 0; i <= 30; i+=2) {

  if (i >= 10) {

    console.log(i);
  }
  
}*/


/*function celsiustofahrernheit(celsius) {
  let fahrenheit;
 fahrenheit = celsius * 9/5 + 32
 return fahrenheit;
}

console.log(celsiustofahrernheit(52));*/

//----------------------------------------------------

/*function fahrenheittocelsius(fh) {
 let celsius;
 celsius = (fh - 32) * 5/9
 return celsius;
}     
console.log(fahrenheittocelsius(100));*/






/*let tablo = [5, 5, 5];

let somme = tablo.reduce((val1, value) => {
   return val1 + value;
 }
 , 0);
 
 console.log(somme); */


//---------------------------------------------------------------------------

/*let tablo = [58, 74, 75, 25];

let result = 0;
for(let i = 0; i < tablo.length; i++) {



    result += tablo[i]/tablo.length;


}
let moyenne = result / tablo.length;


console.log(result);*/



/*function positablo(array) {
  let tablo = []
  for (let i = 0; i < array.length; i++) {


    if (array[i] > 0) {
      tablo.push(array[i])
    }

  }

  return tablo
}

console.log(positablo([1, 5, 25, -58]));   */


//--------------------------------------------------------------------------


/*function max(tablo) {
  let maximum = tablo[0]
  for (let i = 0; i < tablo.length; i++) {
    if (tablo[i]>maximum) {
      maximum = tablo[i]
    }
    
  }
  return maximum
}

console.log(max([1,2,3,5,6,95,36]))/*
  

//-----------------------------------------------------------------------------------------

/*let tablo = [1,0]

for (let i = 2; i <= 10; i++) {
  tablo[i] = tablo[i - 2] + tablo[i - 1]
  console.log(tablo[i]);
}*/

//------------------------------------------------------------------------------------------


/*function check(num) {
 
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false
    }
    
  }

return true;

}

console.log(check(5));*/

//----------------------------------------------------------------------------------------------------

/*function somme(num) {
  let nums = num.toString()
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    result = result + parseInt(nums[i])
  }

  return result
}

console.log(somme(456213789));*/

//------------------------------------------------------------------------------------------------------------------

/*function check(num) {
 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
    
  }

return true;

}

for(let i = 2; i < 100; i++)  {
    
  if(check(i)){

        console.log(i);
    }
}*/
//-------------------------------------------------------------------------------------------------------------
















      
