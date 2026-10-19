let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },

    {
        name: 'Rudi',
        score: 80
    },

    {
        name: 'Dira',
        score: 100
    }
];

let highesStudent = studentsScore[0];

// Lakukan perulangan untuk mengecek setiap siswa
for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > highesStudent.score) {
        highesStudent = studentsScore[i];
    }
}

// Menampilkan output
console.log("Siswa dengan nilai paling besar:");
console.log("Name: " + highesStudent.name);
console.log("Score: " + highesStudent.score);
