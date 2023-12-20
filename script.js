// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

set prisPerPerson = 0;
set pris = användarinput;
set antalPersoner = användarinput;
set dricks = användarinput;
 
function checkNumber ()
    if (om pris || antalPersoner || dricks inte är ett nummer) 
        skriv ut “Du måste använda dig av nummer)
    end if
    else 
        kör function calculate() och returnera värdet prisPerPerson;
        Skriv ut “Varje person ska betala ” + “prisPerPerson” + “ kr”;
    end else
end function

function calculate() {
    let calculatedDricks =  dricks * pris;
    let summan = calculatedDricks + pris;
    prisPerPerson = summan / antalPersoner;

    returnera värdet prisPerPerson;
end function
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

set firstWord = “FOUR”;
set previousWord = firstWord;
set lastWord = “FIVE”;
set keepCount = 0;
set ordbok = [array med alla existerande engelska ord];
set loop till true;

function play() 
while(loop)
    set newWord = inputData;
    if (newWord INTE är ett ord i ordbok)
        PRINT “Det där är inget riktigt ord. Försök igen!”
    end if
    else if (newWord är ett ord i ordbok)
        kör funktionen checkWord(previousWord, newWord) och returnera värdet från count.
        if (värdet från count är lika med noll)
            PRINT “Du har inte gjort några ändringar! Försök igen”
        end if
        else if (värde från count är större än 1)
                PRINT “Du har gjort fler ändringar än tillåtet. Försök igen!”
        end else
        else if (värdet från count är lika med 1)
            öka värdet på keepCount med 1;
            kör funktionen checkWord(newWord, lastWord) och returnera count.
            if (count är 1 eller mer än 1)
                tilldela previousWord värdet från newWord.
            end if
            else if(count är 0) 
                set loop till false
            end else
        end else
    end else
end while 
    PRINT “Grattis! Du lyckades att gå från ” {firstWord} + “ till “ {lastWord} + “ på “ + {keepCount} + “ försök.”
end function

function checkWord(wordOne, wordTwo);
    set count till 0;
    for(varje bokstavsindex i variabeln wordOne)
        if (wordOne[index] != wordTwo[index]) 
            count++
        end if
    end for
    returnera count;
end function;

*/