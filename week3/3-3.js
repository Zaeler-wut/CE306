let students = [{name: "wutthipong" , grade: "A"} , {name: "somtui" , grade: "B"} , {name: "sandee" , grade: "C"}];

students.forEach((student,index) => {
    console.log(`Student ${index}: ${student.name}, Grade: ${student.grade}`)
});

function showStudentCount() {
        console.log("Total student:", students.length)
}

showStudentCount();