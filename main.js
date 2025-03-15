const messageGenerator = {
    _nama: 'a',
    _age: 0,
    namaArr: ['ahmad', 'ali', 'abu'],
    ageArr: [12, 46, 142],
    nama() {
        let namaIndex = Math.floor(Math.random() * 3);
        this._nama = this.namaArr[namaIndex];
    },
    age() {
        let ageIndex = Math.floor(Math.random() * 3);
        this._age = this.ageArr[ageIndex];
    },
    details() {
        return console.log(`Nama: ${this._nama}\nUmur: ${this._age}`);
    },
    message() {
        let morningIndex = Math.floor(Math.random() * 3);
        let afternoonIndex = Math.floor(Math.random() * 3);
        let eveningIndex = Math.floor(Math.random() * 3);
        return console.log(`Morning Tips: ${this.morningTips[morningIndex]}.\nAfternoon Tips: ${this.afternoonTips[afternoonIndex]}.\nEvening Tips: ${this.eveningTips[eveningIndex]}.`)
    },
    morningTips: ['Base your meals on higher fibre starchy carbohydrates', 'Eat lots of fruit and veg', 'Eat more fish, including a portion of oily fish'],
    afternoonTips: ['Cut down on saturated fat and sugar','Eat less salt: no more than 6g a day for adults', 'Get active and be a healthy weight'],
    eveningTips: ['Do not get thirsty', 'Do not skip breakfast', 'cheat day once in a while :)']
};




const person = () => {
    let i = 0;
    while (i < 3) {
    messageGenerator.nama();
    messageGenerator.age();
    messageGenerator.details();
    messageGenerator.message();
    i++;
    }
};

person();