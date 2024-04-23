import Sum from "../Sum"


test("sun function should calculate the some of two numbers",()=>{

   const result = Sum(1 ,4);

   expect(result).toBe(5);

})