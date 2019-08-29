const academy = {
  students: []
}

Object.defineProperty(academy, 'addStudent', {
  set: function(name) {

    var full = name.split(' ');
    this.students.push({
      dayNow: new Date(),
      firstName: full[0],
      surname: full[1]
    })
  }
});

academy.addStudent = "Olya Bilynska";
console.log(academy.students);
