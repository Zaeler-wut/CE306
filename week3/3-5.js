let students = [
    {name: "wutthipong", score: 90},
    {name: "chertam", score: 87},
    {name: "ramed", score: 85},
    {name: "samak", score: 77},
    {name: "sompong", score: 55},
    {name: "yayee", score: 50},
    {name: "intanin", score: 40}
];

function filterPassedStudents(lowScore) {
    students.forEach(student => {
        if (student.score >= lowScore) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}

filterPassedStudents(85);