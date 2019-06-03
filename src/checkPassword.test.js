import React from 'react'
import { checkPassword, hasLowerCase, hasUpperCase, hasNumber, 
    hasNonAlphaNumeric, isOver8Char, isOver12Char, getScore } from './checkPassword'
// import checkPassword from './checkPassword'
// import hasLowerCase from './checkPassword'

test('Password Strength', () => {
    expect(checkPassword('aBc123-nbp23')).toEqual({ 
        score: 6, 
        maxScore: 6,
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        hasNonAlphaNumeric: true,
        isOver8Char: true,
        isOver12Char: true
    })
}) 

test('1 point for lower case letters', () =>{
    expect(hasLowerCase('abc')).toEqual(true)
})

test('1 point for upper case letters', () =>{
    expect(hasUpperCase('aBc')).toEqual(true)
})

test('1 point for numbers', () =>{
    expect(hasNumber('1aBc')).toEqual(true)
})

test('1 point for non alpha-numeric characters', () =>{
    expect(hasNonAlphaNumeric(' ')).toEqual(true)
})

test('1 point for 8 characters or more', () =>{
    expect(isOver8Char('12345678')).toEqual(true)
})

test('1 point for 12 characters or more', () =>{
    expect(isOver12Char('123456789012')).toEqual(true)
})

test('score for each true fn result', () =>{
    expect(getScore('123456789012')).toEqual(3)
})