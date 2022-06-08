let friends = ["Ben","Lal","Thomas","Jacob","Van"];


let x=0;
let z = 100;
for (x=0; x < friends.length;x++){
    let myFriend = friends[x];
    
    console.log(myFriend + ":");

    for (z=100;  z > 0; z--) {
        if (z!=1) {
            console.log(z + " lines of code in the file, " + z + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (z - 1) + " lines of code in the file.");
        }else {
            console.log(z + " line of code in the file," + z + " line of code;"+ myFriend +" strikes one out, clears it all out, no more lines of code in the file")
        };
    };
};
