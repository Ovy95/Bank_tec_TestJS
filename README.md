# Bank tech test

## The Task

Having attempted this in Ruby and not being able to solve the problem during my time at Makers. I decided to attempt this again in JavaScript to help grow my process better. The task is to create a bank app to the specifications listed in the Requirements Section.

### Technology used

### Development
- JavaScript

### Testing
- Jasmine

### Getting started

You can interact with this programme from the JavaScript console in your browser:

1. Clone this repo
2. Open SpecRunner.html
3. Open your browser's dev tools and visit the console tab

<img width="631" alt="Screenshot 2021-02-25 at 18 12 33" src="https://user-images.githubusercontent.com/57540755/109197734-45cfa280-7795-11eb-9c70-5b3abf0a29d5.png">

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## The Approch

---
- TDD
- I completed the task using one class. Which can be seen in early commits. With all passing tests
- After completed the task I decided to split up the Bank class into three classes as it was doing too much
- I created a 2nd class which was Transactions, this was for formatting transactions and for printing statement method
- The 3rd class I created was the Date method as this didn't need to be in the Bank class 
- Having splitting up the class this allowed for calling methods from other Classes    



Classes:
  - Bank class - Contains Debit and Credit method. Inside both these methods calls are made to other methods from the other classes, such as get_date and get_Transactions 
  - Transaction class - Gets Debit and Credit data. Filters the information to be displayed by called Print_statement method
  - Date class - contains one method which gets current date to be used inside with Credit and Debit



## User Stories

```
As a user,
So I can add to my account,
I would like to be able to make a deposit
```
```
As a user,
So I can get money from my account,
I would like to able to make a withdrawal
```
```
As a user,
To get details about my account,
I would like to print an account statement containing transaction dates, amounts, and balances

```
```
As a user,
So I can find transactions easier,
I would like the account statement to show the most recent transactions first

```
## Input/Output

| Input                           | Output                                                         | 
| ------------------------------- | ------------------------------------------------------------   | 
| New Bank object              | Transactions Array is created only has "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance"|
|                                 |                                                                |
| ------------------------------- | ------------------------------------------------------------  | 
| Bank.credit(5)             | print_Statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 |  25/02/2021 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 5.00"                                |
| ------------------------------- | ------------------------------------------------------------   | 
| Bank.credit(5)             | print_Statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 |                               25/02/2021 &#124;&#124; 5.00 &#124;&#124; &#124;&#124; 10.00    |
|                                 |                               25/02/2021 &#124;&#124; 5.00 &#124;&#124; &#124;&#124; 5.00"   |
| ------------------------------- | ------------------------------------------------------------   | 
| Bank.withdraw(5)             | print_Statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 |                               25/02/2021 &#124;&#124; &#124;&#124; 5.00 &#124;&#124; 5.00    | 
|                                 |                               25/02/2021 &#124;&#124; 5.00 &#124;&#124; &#124;&#124; 10.00    |
|                                 |                               25/02/2021 &#124;&#124; 5.00 &#124;&#124; &#124;&#124; 5.00"   |


## Testing

Tests were written with [Jasmine (3.6.0)](https://github.com/jasmine/jasmine/releases).

To run the tests, clone the repo locally and run:

```bash
$> cd bank-tech-test-js
$> open ./SpecRunner.html
```

<img width="601" alt="Screenshot 2021-02-25 at 18 21 04" src="https://user-images.githubusercontent.com/57540755/109198531-3bfa6f00-7796-11eb-9dc4-8cd8996c56b7.png">
