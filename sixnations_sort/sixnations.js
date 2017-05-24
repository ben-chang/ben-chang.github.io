var sixnations = ["England", "France", "Ireland", "Wales", "Scotland", "Italy"];

function dealer() {
    this.arrayDesc = function (array) {
        var len = array.length,
            min = len - len,
            max = len - 1;
        return [len, min, max];
    };
    this.randint = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    this.randCard = function (array) {
        var desc = this.arrayDesc(array);
        var x = this.randint(desc[1], desc[2]);
        console.log(x);
        var randCard = array[x];
        return (randCard);
    };
    this.shuffle = function (array) {
        var arrayLength = array.length;
        var shuffled = [];

        for (var i = 0; i < arrayLength; i++) {
            var desc = this.arrayDesc(array);
            var j = this.randint(desc[1], desc[2]);
            to_push = array.splice(j, 1);
            shuffled.push(to_push[0]);
        }
        return (shuffled);
    };
}

var bernieMac = new dealer();

console.log(sixnations);
console.log(bernieMac.shuffle(sixnations));
console.log(sixnations);







