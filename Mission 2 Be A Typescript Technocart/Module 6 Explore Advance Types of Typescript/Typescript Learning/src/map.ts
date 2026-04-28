// mapped type

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ['1', '4', '6'];

const arrayOfStringWithUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringWithUsingMap);


const user = {
    id: 222,
};


type AreaONum = {
    height: number;
    width: number;
};

type height = AreaONum['height']


// type AreaOfString = {
//     height: string;
//     width: string;
// };


type Area<T> = {
    [key in keyof T]: T[key]

    // key >>> height  >> string
    // key >>> width  >> number
};

/*
T >>> { height: number; width: 50 }

{ height: string; width: number }['height']: number

T["width"]: number

 */


// 

// "height" | "width"

const area1: Area<{ height: number; width: boolean }> = {
    height: 50,
    width: false,

}
