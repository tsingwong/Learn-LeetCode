#! /bin/bash

# 。。。。
# 表示实在不会写 shell 版 indexOf

twoSum() {
    # echo $@
    for last
    do
        true
    done
    # echo $last

    IFS=','
    local k=0
    temp=(`echo "$1"`)

    for val in ${temp[*]}
    do
        local j=$[ $2 - $val ]
        k=$[ $k + 1 ]
        temp_arr="${temp[*]:$k}"
        for temp_val in ${temp_arr[*]}
        do
            echo "$j $temp_val"
            if [ $j == $temp_val ]
            then
                index=0
                for i in ${temp[*]}
                do
                    if [ $i == $j ]
                    then
                        echo "( "$[ $k - 1 ]", "$index" )"
                    fi
                    index=$[ $index + 1 ]
                done
            fi
        done
    done
    
}

arr=(1,2,3,4,5)
twoSum $arr 8