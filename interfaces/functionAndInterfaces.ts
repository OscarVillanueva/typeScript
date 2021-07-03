interface TwoNumbers{

    ( num1: number, num2: number) : number
}

let adds : TwoNumbers
adds = (a: number, b: number) : number => a + b

let substract: TwoNumbers
substract = (a: number, b:number) : number => a - b