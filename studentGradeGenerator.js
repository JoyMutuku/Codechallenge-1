const marks= prompt('Enter your marks: ')
//marks entry

function gradeGenerator(marks){
    if(marks<=100 && marks> 79){
        return "A"
        //if marks are more than 79 return A
    }
    else if(marks<80 && marks >= 60){
        return "B"
        //if marks are more than 59 and less than 80 return B
    }
    else if(marks <= 59 && marks>49){
        return 'C'
        //if marks are more than 49 and less than 60 return C
    }
    else if(marks<=49 && marks >=40){
        return 'D'
        //if marks are more than 39 and less than 49 return D
    }
    else if(marks < 40){
        return 'E'
        //if marks are less than 40 return E
    }
    else{
        return 'Invalid Marks'
        //otherwise return 'Invalid Marks'
    }
}

console.log(gradeGenerator(marks))
