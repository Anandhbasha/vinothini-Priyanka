const {calculateTotal} = require('../utilis')

test("calculate total",()=>{
    const items = [
        {price:100},
        {price:50}
    ]
    expect(calculateTotal(items)).toBe(150)
});