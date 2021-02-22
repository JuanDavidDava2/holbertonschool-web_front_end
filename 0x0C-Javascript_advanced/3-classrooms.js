function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {
        return function () {
            return seat
        }
    }

    let students = [];

    for (let start = 0; start < numbersOfStudents; start++) {
        students.push(studentSeat(start + 1));
    }
    return students;
}
let classRoom = createClassRoom(10);