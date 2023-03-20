let examPoint = [10,8,9,5,6,3];

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
    for (j = 0; j < examPoint.length; j++) {
        let max = examPoint[0];
        for (i = 1; i < examPoint.length; i++) {
            if (max < examPoint[i]) {
                max = examPoint[i];
            }
        }
        examPointSort[j] = max;
        for (i=0;i<examPoint.length;i++){
            if (max === examPoint[i]){
                examPoint[i] = 0;
            }
        }
    }
    console.log(examPointSort)
}



function checkPointAt(index) {
    sortExamPoint();
    document.getElementById("result").innerHTML = `Điểm cao thứ ${index} là ${examPointSort[index-1]}`;
}