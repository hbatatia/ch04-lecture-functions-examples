function showStudents() {
    var students = new Array("Heba", "Rikesh", "Moiz", "Ali");

    document.write("<br />Number of students " + students.length + "<br />");
    document.write("<H1 class='student'>Students list </h1>");
    displayTable(students);
    document.write("<H1 class='student'>Students list sorted</h1>");
    students.sort();
    displayTable(students);
    document.write("<H1 class='student'>Students list in reverse order</h1>");
    students.reverse();
    displayTable(students);
    document.write("<H1 class='student'>Students list except last one</h1>");
    students.pop();
    displayTable(students);
    document.write("<H1 class='student'>Students list with a new one</h1>");
    students.push("Rawdha");
    displayTable(students);
}

function displayTable(tab) {

    for (item of tab) {
        document.write(item + "<br />");
    }
}