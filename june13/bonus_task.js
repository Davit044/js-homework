function createStudent(name, age, number) {
    const Student = {
        name: name,
        age: age,
        grades: number,
        getAverageGrade: function () {
            let sum = 0;
            for (let i = 0; i < this.grades.length; ++i) {
                sum += this.grades[i];
            }

            return sum / this.grades.length;
        }

    };

    return Student;

}

const studentsArray = [];

function addStudent(studentsArray, name, age, grades) {
    studentsArray.push(createStudent(name, age, grades));
}

function getStudentInfo(studentsArray, name) {
    for (const obj of studentsArray) {
        if (obj.name === name) {
            const result = {
                name: obj.name,
                age: obj.age,
                avg: obj.getAverageGrade()
            };

            return result;
        }
    }

    return false;
}

function filterStudentsByGrade(studentsArray, minGrade) {
    const newArr = [];

    for (const obj of studentsArray) {
        if (obj.getAverageGrade() > minGrade) {
            obj.avg = obj.getAverageGrade();
            newArr.push(obj);
        }

    }

    return newArr;
}

addStudent(studentsArray, "Armen", 21, [88, 92, 95, 99]);
addStudent(studentsArray, "Ani", 22, [82, 85, 87, 91]);
addStudent(studentsArray, "Aram", 19, [70, 75, 80, 86]);

const res = getStudentInfo(studentsArray, "Armen");
console.log(res);

const res1 = getStudentInfo(studentsArray, "Jane");
console.log(res1);

const arr = filterStudentsByGrade(studentsArray, 85);
console.log(arr);

