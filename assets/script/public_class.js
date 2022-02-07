class ClassWithStaticField {
    static baseStaticField = 'base field'
  }
  
  class SubClassWithStaticField extends ClassWithStaticField {
    static subStaticField = 'sub class field'
  }
  
  console.log(SubClassWithStaticField.subStaticField)
  // expected output: "sub class field"
  
  console.log(SubClassWithStaticField.baseStaticField)
  // expected output: "base field"
  

//   class ClassWithInstanceField {
//     instanceField = 'instance field'
//   }
  
//   class ClassWithStaticField {
//     static staticField = 'static field'
//   }
  
//   class ClassWithPublicInstanceMethod {
//     publicMethod() {
//       return 'hello world'
//     }
//   }
  