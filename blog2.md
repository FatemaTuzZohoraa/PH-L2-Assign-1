3.--How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Introduction:Generics are very helpful feature that in simple terms helps to generialize data/data types by using dynamic types and that makes code clean and reusable avoiding code duplication

Generics use placeholder to dictate dynamic type.
For example:

type GenericArray<T>=Array<T>


here T is the placeholder for either it's a string type array or number or boolean or anything else. Works for multiple data types.
Generics also preserve strict typing, so typeScript knows the correct type to return and can catch errors during development.