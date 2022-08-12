function radianToDegree(radian){
    let degree = (180 * radian) / Math.PI;
    if(typeof radian !== 'number'){
        return 'Please enter valid data. \nYou data type is not number';
    }
    else{
        return parseFloat(degree.toFixed(2));
    }
}



function isJavaScriptFile(fileName){
    if(typeof fileName != 'string') {
        return 'Please enter valid data. \nYou data type is not string';
    }
    else if(fileName.toLowerCase().endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}



function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    if(typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number'){
        return 'Please enter valid data. \nYou data type is not number';
    }
    else{
        const dieselPerLitre = 114;
        const petrolPerLitre = 130;
        const octanePerLitre = 135;
    
        const dieselPrice = dieselQuantity * dieselPerLitre;
        const petrolPrice = petrolQuantity * petrolPerLitre;
        const octanePrice = octaneQuantity * octanePerLitre;
        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
}



function publicBusFare(peopleCount){
    if(typeof peopleCount !== 'number'){
        return 'Please enter valid data. \nYour data type is not number';
    }
    else{
        return ((peopleCount % 50) % 11) * 250;
    }
}



function isBestFriend(friends, anotherFriends){
    let names = Object.values(friends);
    let friendNames = Object.values(anotherFriends);
    if(typeof names[0] !== 'string' || typeof names[1] !== 'string' || typeof friendNames[0] !== 'string' || typeof friendNames[1] !== 'string'){
        return 'Input valid data';
    }
    else if(friends.name.toLowerCase() == anotherFriends.friend.toLowerCase() && anotherFriends.name.toLowerCase() == friends.friend.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}