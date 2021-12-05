function buddy(start,limit) {
  return [,];
  return "Nothing";
}

describe("Buddy Pairs", ()=>{
  it("Example Tests", ()=>{
    Test.assertDeepEquals( buddy(23, 4669), [48, 75] );
    Test.assertDeepEquals( buddy(4952, 6539), [5775, 6128] );
    Test.assertDeepEquals( buddy(381, 4318), [1050, 1925] );
    Test.assertDeepEquals( buddy(2382, 3679), "Nothing" );
  });
});
