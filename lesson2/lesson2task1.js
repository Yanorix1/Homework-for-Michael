//              III   III ////\\\\ III,    ,III IIIIIIII |I|    |I| ////\\\\ III''\\\  III  |||
//              III...III III  III III,\,,/,III III,,,,, |I| ,, |I| III  III III,,III  III,,///
//              III"""III III  III III \||/ III III""""" \II/II\II/ III  III III""\\\  III""\\\
//              III   III \\\\//// III      III IIIIIIII  \II/\II/  \\\\//// III   \\\ III  |||
//
// task 1 ——— two numbers sum
//цикл вайл. Идёт с постоянным повторением. Мы идём по массиву, индексы прибавляются до конца массива, 
// потом сбрасываются. 
//Если число 1 меньше нужной суммы, то мы рассматриваем: отнимаем от нужной суммы найденное число 1 и ищем 
// по массиву число, равное остатку от вычитания
var numbers = [13, 345, 1, 234, 23, 2, 3, 6, 5, 4567, 32, 45, 5, 43, 10]

function twoNumbersSum(array, sum) {
    var isAnyPair = false
    var currentFirstNum = 0
    var currentFirstNumIndex = 0
    var expectedSecondSum = 0
    var currentSecondNum = 0
    var currentSecondNumIndex = 0
    var finalFirstNum = 0
    var finalSecondNum = 0

    while (isAnyPair === false) {
        console.log("заходим в цикл")

        currentFirstNum = array[currentFirstNumIndex]
        console.log("наше нынешнее первое потенц. число =", currentFirstNum)
        if (currentFirstNum < sum) {
            console.log("условие выполнилось, первое потенц. число < требуемой суммы и оно =", currentFirstNum)
            expectedSecondSum = sum-currentFirstNum;
            console.log("если первое число у нас =", currentFirstNum,"то ожидаемое значение второго числа =", expectedSecondSum)
            currentSecondNum = array[currentSecondNumIndex]
            console.log("теперь значение нынешнего второго числа =", currentSecondNum)
            if (currentSecondNum == expectedSecondSum) {
                console.log("условие выполнилось, нынешнее второе число = ожидаемому второму числу, они оба =", expectedSecondSum)
                finalFirstNum = currentFirstNum
                finalSecondNum = currentSecondNum
                console.log("финальные 1 и 2 числа пары равны нынешним, то есть 1 =", finalFirstNum,"а второе =",finalSecondNum)
                isAnyPair = true
                console.log("наличие пары = тру")
            }
        }
        else {
            currentFirstNumIndex++; 
            currentSecondNumIndex = 0;
            console.log("Условие не выполнилось. куррент индекс первого числа на один больше и =", currentFirstNumIndex, "куррент индекс второго числа теперь = 0")
        }
        if (currentSecondNumIndex == array.lenght) {
            console.log("условие выполнилось, куррент индекс второго потенциального числа равен длине списка.")
            currentSecondNumIndex = 0; 
            currentFirstNumIndex++
            console.log("нынешний индекс второго потенц. числа = 0, нынешний индекс первого потенц.числа на 1 больше и теперь =", currentFirstNumIndex)
        }
        else {
            currentSecondNumIndex++;
            console.log("Условие не выполнилось, всё норм и куррент индекс второго числа увеличился на 1 и =", currentSecondNumIndex)
        }
        if (currentFirstNumIndex === array.lenght) {
            console.log("выполнено условие - индекс нынешнего 1 числа ушёл за пределы цикла, то есть проверен весь цикл целиком"); 
            break
        } 

    }


    console.log("мы вышли из этого потока сознания и цикла смерти победителями, я в ахуе")
    if (isAnyPair){
        console.log("мы нашли подходящую пару, где первое число =", finalFirstNum,"а второе =",finalSecondNum)
    }
    else if (isAnyPair === false) {
        console.log("мы проделали такой огромный путь и не нашли НИ ХУЯ.. Ну как так можно?")
    }
}

twoNumbersSum(numbers, 3);