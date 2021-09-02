var tableLength = 12;
var tourDestiantions = ['coxsbazar', 'napal', 'vutan' ,'paris'];

tourDestiantions.indexOf('vutan');

var threeDestiantion = tourDestiantions[2];
tourDestiantions [1] = 'srilanka';

tourDestiantions.push('London');
tourDestiantions.pop();



if(tourDestiantions[1] == 'nepal'){
    console.log('phara ahara');
}
else if (tourDestiantions[1] == 'china'){
    console.log('chaina java na')
}
else if (tourDestiantions.length  == 4 ){
    console.log('aro tata ase aro besi ghurmu')
}
else {
    console.log('khothao janva na barity thakbo')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget){
    console.log('ami dim khamu')
}
if (eggPrice >= myBudget){
    console.log('lebu dhey bath khobo')
}