let timerCounter = 0
const timerDisplay = document.getElementById("timer")
var timerInterval

function submitAnswer() {
    // ACROSS 1
    const item1_7 = document.getElementById('item1-7').value
    const item1_8 = document.getElementById('item1-8').value
    const item1_9 = document.getElementById('item1-9').value
    const item1_10 = document.getElementById('item1-10').value
    const item1_11 = document.getElementById('item1-11').value
    const item1_12 = document.getElementById('item1-12').value

    // ACROSS 3
    const item4_4 = document.getElementById('item4-4').value
    const item4_5 = document.getElementById('item4-5').value
    const item4_6 = document.getElementById('item4-6').value
    const item4_7 = document.getElementById('item4-7').value
    const item4_8 = document.getElementById('item4-8').value
    const item4_9 = document.getElementById('item4-9').value
    const item4_10 = document.getElementById('item4-10').value

    // ACROSS 4
    const item6_4 = document.getElementById('item6-4').value
    const item6_5 = document.getElementById('item6-5').value
    const item6_6 = document.getElementById('item6-6').value
    const item6_7 = document.getElementById('item6-7').value
    const item6_8 = document.getElementById('item6-8').value

    // ACROSS 5
    const item8_4 = document.getElementById('item8-4').value
    const item8_5 = document.getElementById('item8-5').value
    const item8_6 = document.getElementById('item8-6').value
    const item8_7 = document.getElementById('item8-7').value
    const item8_8 = document.getElementById('item8-8').value
    const item8_9 = document.getElementById('item8-9').value
    const item8_10 = document.getElementById('item8-10').value

    // ACROSS 8
    const item10_5 = document.getElementById('item10-5').value
    const item10_6 = document.getElementById('item10-6').value
    const item10_7 = document.getElementById('item10-7').value
    const item10_8 = document.getElementById('item10-8').value
    const item10_9 = document.getElementById('item10-9').value
    const item10_10 = document.getElementById('item10-10').value
    const item10_11 = document.getElementById('item10-11').value
    const item10_12 = document.getElementById('item10-12').value

    // ACROSS 9
    const item11_2 = document.getElementById('item11-2').value
    const item11_3 = document.getElementById('item11-3').value
    const item11_4 = document.getElementById('item11-4').value
    const item11_5 = document.getElementById('item11-5').value

    // ACROSS 10
    const item13_4 = document.getElementById('item13-4').value
    const item13_5 = document.getElementById('item13-5').value
    const item13_6 = document.getElementById('item13-6').value

    // DOWN 2
    const item2_8 = document.getElementById('item2-8').value
    const item3_8 = document.getElementById('item3-8').value
    const item5_8 = document.getElementById('item5-8').value
    const item7_8 = document.getElementById('item7-8').value
    const item9_8 = document.getElementById('item9-8').value
    const item11_8 = document.getElementById('item11-8').value

    // DOWN 6
    const item8_12 = document.getElementById('item8-12').value
    const item9_12 = document.getElementById('item9-12').value
    const item11_12 = document.getElementById('item11-12').value

    // DOWN 7 
    const item10_2 = document.getElementById('item10-2').value
    const item12_2 = document.getElementById('item12-2').value
    const item13_2 = document.getElementById('item13-2').value

    // DOWN 8 
    const item12_5 = document.getElementById('item12-5').value

    if ((item1_7 == "B" || item1_7 == "b") && (item1_8 == "I" || item1_8 == "i") && (item1_9 == "G" || item1_9 == "g") && (item1_10 == "S" || item1_10 == "s") && (item1_11 == "K" || item1_11 == "k") && (item1_12 == "Y" || item1_12 == "y") &&
    (item4_4 == "B" || item4_4 == "b") && (item4_5 == "E" || item4_5 == "e") && (item4_6 == "N" || item4_6 == "n") && (item4_7 == "I" || item4_7 == "i") && (item4_8 == "L" || item4_8 == "l") && (item4_9 == "D" || item4_9 == "d") && (item4_10 == "E" || item4_10 == "e") &&
    (item6_4 == "S" || item6_4 == "s") && (item6_5 == "D" || item6_5 == "d") && (item6_6 == "E" || item6_6 == "e") && (item6_7 == "A" || item6_7 == "a") && (item6_8 == "S" || item6_8 == "s") && 
    ((item8_4 == "F" || item8_4 == "f") && (item8_5 == "O" || item8_5 == "o") && (item8_6 == "R" || item8_6 == "r") && (item8_7 == "E" || item8_7 == "e") && (item8_8 == "V" || item8_8 == "v") && (item8_9 == "E" || item8_9 == "e") && (item8_10 == "R" || item8_10 == "r")) &&
    ((item10_5 == "M" || item10_5 == "m") && (item10_6 == "I" || item10_6 == "i") && (item10_7 == "D" || item10_7 == "d") && (item10_8 == "T" || item10_8 == "t") && (item10_9 == "E" || item10_9 == "e") && (item10_10 == "R" || item10_10 == "r") && (item10_11 == "M" || item10_11 == "m") && (item10_12 == "S" || item10_12 == "s")) &&
    ((item11_2 == "A" || item11_2 == "a") && (item11_3 == "K" || item11_3 == "k") && (item11_4 == "I" || item11_4 == "i") && (item11_5 == "C" || item11_5 == "c")) &&
    ((item13_4 == "S" || item13_4 == "s") && (item13_5 == "D" || item13_5 == "d") && (item13_6 == "A" || item13_6 == "a")) &&
    ((item2_8 == "N" || item2_8 == "n") && (item3_8 == "C" || item3_8 == "c") && (item5_8 == "U" || item5_8 == "u") && (item7_8 == "I" || item7_8 == "i") && (item9_8 == "I" || item9_8 == "i") && (item11_8 == "Y" || item11_8 == "y")) && 
    ((item8_12 == "B" || item8_12 == "b") && (item9_12 == "C" || item9_12 == "c") && (item11_12 == "I" || item11_12 == "i"))&&
    ((item12_5 == "A" || item12_5 == "a"))&&
    ((item10_2 == "T" || item10_2 == "t") && (item12_2 == "F" || item12_2 == "f") && (item13_2 == "T" || item13_2 == "t"))){
        alert("CORRECT! You have accomplished this game in " + timerCounter + " seconds")
        clearInterval(timerInterval)
    } else {
        alert("INCORRECT")
        clearInterval(timerInterval)
    }
}



function startButton() {
    document.getElementById('parallax').style.display = "none"
    document.getElementById('timer').style.display = "flex"
    document.getElementById('crossword-board-container').style.display = "flex"
    document.getElementById('submit-btn').style.display = "flex"
    document.getElementById('game-name').style.display = "flex"
    document.getElementById('hints').style.display = "flex"
    
    timerInterval = setInterval(() => {
        timerCounter++
        timerDisplay.innerHTML = "TIMER: " + timerCounter
    }, 1000)

    var timeChecker = setInterval(() => {
        if (timerCounter > 600) {
            alert("TIMES UP! Looks like you were unable to finish the game on time.")
        }
    }, 100)
}