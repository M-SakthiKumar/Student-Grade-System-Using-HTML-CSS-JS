 function cal() {
            var marksobtained, totalmarks, avg, Grade
            marksobtained = parseInt(document.getElementById("num1").value)
            totalmarks = parseInt(document.getElementById("num2").value)
            avg = ((marksobtained / totalmarks) * 100).toFixed(1)
            document.getElementById("avg").innerHTML= `Your Precentage : ${avg} %`
            Grade;
            if (avg >= 91 && avg <= 100) {
                Grade = "Congratulations! Your grade is Distinction"
            }
            else if (avg >= 81 && avg <= 90) {
                Grade = "Congratulations! Your grade is Frist Class"
            }
            else if (avg >= 71 && avg <= 80) {
                Grade = " Your grade is Second Class"
            }
            else if (avg >= 40 && avg <= 70) {
                Grade = " Your grade is Third Class"
            }
           
            
            else if(avg<=40){
                Grade = "Sorry.You are fail.Try again! "
            }
            else{
                Grade=alert("please Enter your Marks")
            }
            document.getElementById("demo").innerHTML =Grade 


    
}