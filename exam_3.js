function checkStr1InStr2(str1, str2) {
    let tempArr = str2.split(" ");
    console.log(tempArr)
    for (let i = 0; i < tempArr.length; i++) {
        if (str1 === tempArr[i]) {
            alert("true");
            return true;
        }
    }
    alert("false");
}

