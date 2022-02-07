// class ClassWithPrivateField {
//     #privateField;
//   }
  
//   class ClassWithPrivateMethod {
//     #privateMethod() {
//       return 'hello world';
//     }
//   }
  
//   class ClassWithPrivateStaticField {
//     static #PRIVATE_STATIC_FIELD;
//   }
  
//   class ClassWithPrivateStaticMethod {
//     static #privateStaticMethod() {
//       return 'hello world';
//     }
//   }
  
class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42;
    }
  }
  
  class SubClass extends ClassWithPrivateField {
    #subPrivateField;
  
    constructor() {
      super();
      this.#subPrivateField = 23;
    }
  }
  
 let bothClass=  new SubClass();
console.log(bothClass);
  // bothClass {#privateField: 42, #subPrivateField: 23}
  