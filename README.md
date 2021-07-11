# Neighbor Number

#### This is a simple web app for converting portions of a random user-generated number (converted into an array including all preceding numbers) into a phrased string if/when the generated array includes the numbers 1, 2, or 3.

#### By Tim Roth

## Technologies Used

* HTML
* CSS
* Markdown
* Bootstrap
* Javascript
* jQuery
* VSCode
* Terminal
* GitHub

## Description

This is a silly website that converts a user-generated number from 0-1000 into one of three possible outcomes if the user's number matches any of the following conditions, in order of appearance, each condition overwriting the last:
* "beep" if user number includes the number 1
* "boop" if user number includes the number 2 
* "won't you be my neighboor?" if user number includes the number 3

## Tests/Specs

Describe: neighborNumber()
Test: "It should create an array with user inputted number of values 0-user-inputted number."
Expected outcome: [0,1,2,3,4,userinputtedNumber]

Describe: neighborNumber()
Test: "It should replace any user numbers in the array that include the number 3 with 'Won't you be my neighbor?'."
Expected outcome: [0,1,2,"Won't you be my neighbor?"]

Describe: neighborNumber()
Test: "It should replace any numbers that include the number 2 with 'boop'."
Expected outcome: "boop"

Describe: neighborNumber()
Test: "It should replace any numbers that include the number 1 with 'beep'."
Expected outcome: "beep"

Describe: neighborNumber()
Test: "It should loop through the array and return a string that has replaced all instances of the magic numbers with their corresponding word or phrase."
Expected outcome: "0, beep, boop, won't you be my neighbor, 4, 5, user-inputted number"

## How to download to view!

* Be alive
* Learn to use computer
* Connect to internet
* Open internet browser
* Navigate to https://github.com/phantomcurve/neighbor
* Click the green "Code" button
* Select "Download ZIP"
* Open and extract downloaded ZIP folder
* Within the folder, right-click index.html
* Select "open with" and choose your browser
* Delight in your capability and enjoy the page before your eyes

## Licensing

* MIT License 

Copyright (C) [2021] [Tim Roth]

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.