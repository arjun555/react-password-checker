import React from 'react';

export function checkPassword(password){
    return ({ 
                score: getScore(password),
                maxScore: 6, 
                hasLowerCase: hasLowerCase(password), 
                hasUpperCase: hasUpperCase(password),
                hasNumber: hasNumber(password),
                hasNonAlphaNumeric: hasNonAlphaNumeric(password),
                isOver8Char: isOver8Char(password),
                isOver12Char: isOver12Char(password)
        })
}

export function hasLowerCase(password){
    let regex = /[a-z]/
    return regex.test(password) ? true : false
}

export function hasUpperCase(password){
    let regex = /[A-Z]/
    return regex.test(password) ? true : false
}

export function hasNumber(password){
    let regex = /[0-9]/
    return regex.test(password) ? true : false
}

export function hasNonAlphaNumeric(password){
    let regex = /[^0-9A-Za-z]/
    return regex.test(password) ? true : false
}

export function isOver8Char(password){
    return password.length >= 8 ? true : false
}

export function isOver12Char(password){
    return password.length >= 12 ? true : false
}

export function getScore(password){
    let score = 0
    if(hasLowerCase(password)){score += 1}
    if(hasUpperCase(password)){score += 1}
    if(hasNumber(password)){score += 1}
    if(hasNonAlphaNumeric(password)){score += 1}
    if(isOver8Char(password)){score += 1}
    if(isOver12Char(password)){score += 1}

    return score
}





