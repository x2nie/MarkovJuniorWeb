import { Random } from "../src/random";

const seed154 = [
    0.47791382739223300000,
    0.36302491014964200000,
    0.12128130864411700000,
    0.50738612632611100000,
    0.67146542001118200000,
    0.27406676359198400000,
    0.87424821633577700000,
    0.18641628147401700000,
    0.91647131318062100000,
    0.74261361581395100000,
    0.11783283628422400000,
    0.67090925139883000000,
    0.31306260652517100000,
    0.90652592103300900000,
    0.47807178296059000000,
    0.58589695328189900000,
    0.81443532454522100000,
    0.89524950408155500000,
    0.60238716965652400000,
    0.45929974152674000000,
    0.08313595088344810000,
    0.42187292800372100000,
    0.49762867693678900000,
    0.68777770068858600000,
    0.91077043763863400000,
    0.78782065994470400000,
    0.59993840828535100000,
    0.53077443853522400000,
    0.59769985433560800000,
    0.85825060254812700000,
    0.71789711141860900000,
    0.64731639188123700000,
    0.60514699975268300000,
    0.62378418754031200000,
    0.27359789063855900000,
    0.04697599916112420000,
    0.14104368730496800000,
    0.19833310982134800000,
    0.17466864323926600000,
    0.28890156200570100000,
    0.82104132176425400000,
    0.00042896484976120500,
    0.08022903095941480000,
    0.68223158953815300000,
    0.35631470165975100000,
    0.48755635064447100000,
    0.66925382831564800000,
    0.72876354061475200000,
    0.31241287957523600000,
    0.38587354420957800000,
    0.25608144386489000000,
    0.07029268567929630000,
    0.99967193044706800000,
    0.02837029426748410000,
    0.22821457601534900000,
    0.05604089938851120000,
    0.865396233212853,
];

describe("test Random", () => {
    test("if random.next works", () => {
        const rnd = new Random(1);
        expect(rnd.Next(100)).toBeLessThanOrEqual(100);
        expect(rnd.Next(100)).toBeLessThanOrEqual(100);
        expect(rnd.Next(100)).toBeLessThanOrEqual(100);
        expect(rnd.Next(100)).toBeGreaterThan(0);
        expect(rnd.Next(100)).toBeGreaterThan(0);
        expect(rnd.Next(100)).toBeGreaterThan(0);
    });
    
    
    test("seed 145 @15", () => {
        const rnd = new Random(145);
        expect(rnd.NextDouble()).toBe(seed154[0]);
        expect(rnd.NextDouble()).toBe(seed154[1]);
        expect(rnd.NextDouble()).toBe(seed154[2]);
        expect(rnd.NextDouble()).toBe(seed154[3]);
        expect(rnd.NextDouble()).toBe(seed154[4]);
        expect(rnd.NextDouble()).toBe(seed154[5]);
        expect(rnd.NextDouble()).toBe(seed154[6]);
        expect(rnd.NextDouble()).toBe(seed154[7]);
        expect(rnd.NextDouble()).toBe(seed154[8]);
        expect(rnd.NextDouble()).toBe(seed154[9]);
        expect(rnd.NextDouble()).toBe(seed154[10]);
        expect(rnd.NextDouble()).toBe(seed154[11]);
        expect(rnd.NextDouble()).toBe(seed154[12]);
        expect(rnd.NextDouble()).toBe(seed154[13]);
        expect(rnd.NextDouble()).toBe(seed154[14]);
        // expect(rnd.NextDouble()).toBe(seed154[15]);
    });

    // test.each(seed154)(
    //     '.add(%i)',
    //     (a, expected) => {
    //       expect(rnd.NextDouble()).toBe(expected);
    //     },
    //   );

    test("seed 145 @full", () => {
        const rnd = new Random(145);
        seed154.map((expected, i) => {
            expect(rnd.NextDouble()).toBe(expected);
        })
        // expect(rnd.NextDouble()).toBe(seed154[0]);
        // expect(rnd.NextDouble()).toBe(seed154[1]);
    })
})