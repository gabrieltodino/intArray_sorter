var array = [23,54,102,4,7,47]

var array_sort = [23,54,102,4,7,47]

for(count_num = 0; count_num <= array.length-1; count_num++){//cycle through all items in the array

    for(main_num = count_num; main_num <= array.length-1; main_num++){//repeat the check on the next items in the array
        if(array_sort[count_num] <= array_sort[main_num]){
            
        }else{
            var min = array_sort[main_num]//takes the smallest value
            var max = array_sort[count_num]//takes the highest value


            //changes position values
            array_sort[count_num] = min
            array_sort[main_num] = max
        }
    }
}

console.log(`raw array = ${array}`)
console.log(`sorted array = ${array_sort}`)