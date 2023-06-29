const speed= prompt('Enter your speed: ')
//speed entry

function gradeGenerator(speed){
    if(speed<70){
        return "OK"
        //if speed is less than 70 return OK
    }
    else if(speed>70){
        const demeritpoint=(speed-70)/5
        if(demeritpoint>1 && demeritpoint<12){
            return `Point: ${demeritpoint}`
            //for every 5km/s above 70 a demerit point is returned
        }
        else{
            return "License suspended"
            //if a driver gets more than 12 demerit points their license is suspended
        }
    }
    else{
        return "Invalid Speed"
        //otherwise return Invalid Speed
    }
        
}

console.log(gradeGenerator(speed))
