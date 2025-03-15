const messageGenerator = {
    _nama: 'nama',
    _age: 0,
    set nama(newName) {
        this._nama = newName;
    },
    set age(newAge) {
       this._age = newAge; 
    },
    get details() {
        return `Nama: ${this._nama}\nUmur: ${this._age}`;
    },
    morningTips: [],
    afternoonTIps: [],
    eveningTips: []
};




const person = (nama, umur) => {
    messageGenerator.nama = nama;
    messageGenerator.age = umur;
    console.log(messageGenerator.details);
};

const ahmad = person('ahmad', 38);

console.log(ahmad);