let examPoint = [10, 7, 9, 5, 6, 3];

//
// function initExamPoint() {
//     examPoint.length = document.getElementById("quantity").value;
//     for (let i = 0; i < examPoint.length; i++) {
//         examPoint[i] = prompt(`Nhập điểm thứ ${i + 1}`)
//     }
document.getElementById("listPoint").innerHTML = `${examPoint}`;
// }

let examPointSort = [];

function sortExamPoint() {
    let i, j;
    let newExamPoint = examPoint;
    for (j = 0; j < newExamPoint.length; j++) {
        let max = newExamPoint[0];
        for (i = 1; i < newExamPoint.length; i++) {
            if (max < newExamPoint[i]) {
                max = newExamPoint[i];
            }
        }
        examPointSort[j] = max;
        for (i = 0; i < newExamPoint.length; i++) {
            if (max === newExamPoint[i]) {
                newExamPoint[i] = 0;
            }
        }
    }
    console.log(examPointSort)
}


function checkPointAt(index) {
    sortExamPoint();
    document.getElementById("result").innerHTML = `Điểm cao thứ ${index} là ${examPointSort[index - 1]}`;
}