// Function#1 printing a person name in a welcome message
export function personName(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

// Function#2 converting minutes to hours
export function convertMinutesToHours(minutes) {
    return minutes / 60;
}

// Function#3 to calculate the factorial of a number
export function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

//Function#4 Our Advanced function choice is "computing of grades"
export function computeGrade(score) {
    if (score >= 90) {
        return "A = Awesome: Excellent performance";
    } else if (score >= 80) {
        return "B = Brilliant: Very good performance";
    } else if (score >= 70) {
        return "C = Competent: Good performance";
    } else if (score >= 60) {
        return "D = Decent: Satisfactory performance";
    } else {
        return "F = Failed: Needs improvement";
    }
}
