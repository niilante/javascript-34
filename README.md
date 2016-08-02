# Inpsyde JavaScript Style Guide

[![Version](https://img.shields.io/github/release/inpsyde/javascript.svg)](https://github.com/inpsyde/javascript)
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://github.com/inpsyde/javascript)
[![Build](https://img.shields.io/travis/inpsyde/javascript.svg)](http://travis-ci.org/inpsyde/javascript)
[![License](https://img.shields.io/github/license/inpsyde/javascript.svg)](https://github.com/inpsyde/javascript)

> Style guide for writing consistent JavaScript for WordPress projects.

## Table of Contents

* [Lines](#lines)
* [Semicolons](#semicolons)
* [Naming Conventions](#naming-conventions)
* [Comments](#comments)
* [Indentation](#indentation)
* [Wrapping](#wrapping)
* [Braces](#braces)
* [Commas](#commas)
* [Spaces](#spaces)
* [Variables](#variables)
* [Type Casting](#type-casting)
* [Comparison and Equality](#comparison-and-equality)
* [Yoda Conditions](#yoda-conditions)
* [Ternaries](#ternaries)
* [`if` Statements](#if-statements)
* [`switch` Statements](#switch-statements)
* [Strings](#strings)
* [Objects](#objects)
* [Arrays](#arrays)
* [Destructuring](#destructuring)
* [Iterators](#iterators)
* [Functions](#functions)
* [Arrow Functions](#arrow-functions)
* [Scope](#scope)
* [Classes](#classes)
* [Modules](#modules)
* [Events](#events)
* [Linters](#linters)

## Lines

Lines should not be longer than 120 characters, and there should be a new line at the end of each file.

## Semicolons

Terminate all statements with a semicolon.
Do not rely on _automatic semicolon insertion_ (ASI).

## Naming Conventions

Names should be descriptive, but not excessively so.
Exceptions are allowed, for example, using just `i` for a loop.

Function and variable names should be full words, using camelCase with a lowercase first letter.
Constructor functions intended for use with the `new` keyword should use PascalCase.

```js
let someName = getRawName();

const filter = new Filter();

someName = filter.filterName( someName );
```

## Comments

Place comments before the code to which they refer.

Comments should always be preceded by a blank line, unless they are on the first line of a block.

Capitalize the first letter of the comment, and include a period at the end when writing full sentences.

There must be a single space between the comment token, `//`, and the comment text.

```js
const data = { some: 'data' };

// Here goes an explanation for something complex or unclear that is about to follow.
doSomethingComplexOrUnclearWithTheData( data );
```

Use JSDoc for all classes, functions, methods, and members.
Since JSDoc is able to interprete ES6 classes, there's no reason not to.
Include at least a short description, and parameter and return value documentation.

```js
/**
 * The Model module.
 */
class Model extends Backbone.Model {
	/**
	 * Constructor. Sets up the properties.
	 * @param {Object} [options={}] - Optional. The constructor options. Defaults to an empty object.
	 */
	constructor( options = {} ) {
		super( options );

		/**
		 * The URL root.
		 * @type {String}
		 */
		this.urlRoot = options.urlRoot;
	}

	/**
	 * Sets the URL root to the given value.
	 * @param {String} urlRoot - The URL root.
	 */
	setUrlRoot( urlRoot ) {
		this.urlRoot = urlRoot;
	}
}

/**
 * Returns the name of the given module.
 * @param {Function|String|Object} module - The instance or constructor or name of a module.
 * @returns {String} The name of the module.
 */
function getModuleName ( module ) {
	switch ( typeof module ) {
		case 'function':
			return module.name;

		case 'string':
			return module;

		case 'object':
			return module.constructor.name;
	}

	return '';
};
```

## Indentation

Indent by one tab:

* function bodies;
* parameters of function declarations, **iff** multiline;
* arguments of function calls, **iff** multiline;
* chained method calls;
* the contents of blocks (e.g., `if` or `switch`);
* `case` branches in `switch` statements;
* the contents of grouped expressions (e.g., long conditionals);
* the ternary operators `?` and `:`, **iff** multiline;
* the properties of object literals;
* the elements of an array;
* the contents of ES6 export and import statements, **iff** multiline;
* multiline statements (e.g., long string concatenation).

```js
import {
	User,
	Administrator
} from 'user';

function doSomething(
	first,
	second
) {
	const isFirstFirst = 'first' === first
		? true
		: checkIfFirst( second );

	const user = new User( first, second );
	user
		.doA()
		.doB()
		.doC();

	const result = {};

	if (
		user instanceof Oracle
		|| user.can( 'answer' )
	) {
		const answer = user.giveAnswer();

		switch ( answer ) {
			case 42:
				result.age = 42;
				break;

			case 23:
				result.name = 'secret';
				break;

			default:
		}
	}

	return result;
}

const name = 'Albus Percival Wulfric Brian Hadschi Halef Omar Dumbledore '
	+ 'Ben Hadschi Abul Abbas Ibn Hadschi Dawuhd al Gossarah';

const first = {
	name,
	age: 42
};

const second = [
	'first',
	'second'
];

const result = doSomething(
	'first',
	'second'
);

export {
	first,
	second,
	result
};
```

## Wrapping

If a line with chained method calls is too long, each method call has to be chopped down before the dot, `.`, onto its own line.

```js
someTask
	.makeItWork()
	.makeItRight()
	.makeItFast();
```

All keywords that are related to one or two blocks are placed on the same line as the adjacent curly brace of the respective block(s).
This means that, for example, the `else` keyword goes between the closing curly brace of the `if` block and the opening curly brace of its own block.

```js
if ( checkSomething() ) {
	// ...
} else {
	// ...
}

do {
	// ...
} while ( checkSomethingElse() );
```

If an expression has to be wrapped onto multiple lines, put each newline before an operator.

```js
somePreviouslyDeclaredVariable = Number( aNumericStringWithAnObviouslyLongName )
	+ aNumberWithAnObviouslyLongName
	- anotherNumberWithAnObviouslyLongName;
```

If an object literal has to be chopped down onto multiple lines, the opening (i.e., left) curly brace is placed at the end of the line with the assignment operator, while the closing (i.e., right) curly brace is placed on a new line after the last property, indented like the line with the assignment operator.

```js
const dataObject = {
	foo: 'bar',
	baz: 'qux'
};
```

If an array has to be chopped down onto multiple lines, the opening (i.e., left) bracket is placed at the end of the line with the assignment operator, while the closing (i.e., right) bracket is placed on a new line after the last element, indented like the line with the assignment operator.

```js
const dataArray = [
	'foo',
	'bar'
];
```

If an ES6 export or import statement has to be chopped down onto multiple lines, the opening (i.e., left) curly brace is placed at the end of the line with the `import` or `export` keyword, while the closing (i.e., right) curly brace is placed on a new line after the last variable name, indented like the line with the `import` or `export` keyword.

```js
import {
	foo,
	bar
} from 'foo-bar';

const baz = foo;
const qux = bar;
export {
	baz,
	qux
};
```

## Braces

Wrap all individual blocks in `if`-`else if`-`else`, `for`, `while`, `do`-`while`, `switch`, and `try`-`catch`-`finally` statements in curly braces.
This is also true for single-statement blocks.

The opening (i.e., left) curly brace of blocks is placed at the end of the line.
The closing (i.e., right) curly brace of blocks is placed on a new line, indented like the line the block started in.

```js
if ( 42 === answer ) {
	// ...
} else if ( 23 < answer ) {
	// ...
} else {
	// ...
}

for ( let i = 0; i < 42; i++ ) {
	// ...
}

while ( checkSomething() ) {
	// ...
}

do {
	// ...
} while ( checkSomething() );

switch ( answer ) {
	case 42:
		// ...
		break;

	default:
		// ...
}

try {
	// ...
} catch ( e ) {
	// ...
} finally {
	// ...
}
```

When the parameters of a function declaration are chopped down on multiple lines, the opening (i.e., left) brace is placed at the end of the line with the `function` keyword, while the closing (i.e., right) brace is placed on a new line after the last parameter, indented like the line with the `function` keyword.

```js
function fooBar(
	foo,
	bar
) {
	// ...
}
```

## Commas

When wrapping structures onto multiple lines (e.g., a function's parameters, or an array's elements), commas are the last thing in the respective lines.
Do not start lines with (whitespace and then) a comma.

```js
function fooBar(
	foo,
	bar
) {
	const baz = {
		name: 'baz',
		[ foo ]: bar
	};
	const qux = [
		'first',
		baz
	];
}
```

## Spaces

For the sake of better readibility, use spaces almost all the time to visually separate two individual structures.
By means of uglification, the JavaScript files to be used in production are free of all superfluous spaces anyway.

> When in doubt, space it out.  
> &mdash;[WordPress JavaScript Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#spacing)

Use spaces:

* before the parentheses in `if`, `for`, `while`, `switch`, and `catch` statements;
* around assignment operators (e.g., `=`, or `+=`);
* around logical operators (e.g., `&&`, or `||`);
* around equality and inequality operators (e.g., `==`, or `!==`);
* around relational operators (e.g., `<`, or `>=`);
* around bitwise operators (e.g., `&`, `|`, or `^`);
* around arithmetic operators (e.g., `+`, `/`, or `%`);
* around shift operators (e.g., `<<`, or `>>>`);
* after the unary not operator (i.e., `!`);
* before the left curly brace of function declarations;
* before the left curly brace of `if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, and `finally` statements;
* before the keywords `else`, `while`, `catch`, and `finally`;
* within brackets;
* within both function delaration and function call parentheses, **iff** not empty;
* within the parentheses of `if`, `for`, `while`, `switch`, and `catch` statements;
* within the braces of object literals, **iff** not empty;
* within both ES6 export and import braces;
* around the ternary operators `?` and `:`;
* after a comma;
* after a property name-value separator `:`;
* after a type reference colon;
* after a destructuring alias colon.

Use NO spaces:

* before the parentheses in both function declarations and function calls;
* before the parentheses in functions expressions;
* after algebraic signs (i.e., `+1`, and `-1`);
* around decrement and increment operators (e.g., `i++`, or `--j`);
* around when accessing a specific array element by using a **scalar** key (e.g., `0`, or `'data'`);
* within **empty** function delaration and function call parentheses;
* within the brackets of **empty** arrays;
* within the braces of **empty** object literals;
* before a comma;
* before a semicolon;
* before a property name-value separator `:`;
* before a type reference colon;
* at the end of a line;
* on a blank line.

## Variables

If possible, use `const` for all of your variables.
If you have to reassign variables, use `let` instead of `var`.

```js
const data = { some: 'data' };

let url = 'http://example.com';

if ( shouldFilterUrl() ) {
	url = filterUrl( url );
}

sendData( data, url );
```

Give each variable its own line, and use a full declaration consisting of at least either `const` or `let` (if you must), and the variable name.

```js
const foo = 'foo';
const bar = new Bar();

let baz;
let qux = bar.doSomething( baz );
```

## Type Casting

Use explicit type casting.

```js
const id = Number( idString );
const answer = String( 42 );
const isPostValid = Boolean( post );
```

## Comparison and Equality

Always use strict comparison (i.e., `===`, and `!==`).

```js
if ( 42 === answer ) {
	// ...
} else if ( 23 !== answer ) {
	// ...
} else {
	// ...
}
```

Make use of the implicit _to-Boolean_ coercion.

```js
const name = 'John Doe';
const slug = sluggifyName( name );
if ( slug ) {
	const blockquotes = document.querySelectorAll( `blockquote.${slug}` );
	if ( blockquotes.length ) {
		console.log( `There are ${blockquotes.length} quotes by ${name}.` );
	}
}
```

## Yoda Conditions

Whenever you are comparing a variable to a string, boolean, integer, or other constant or literal, the variable should always be put on the right hand side, and the constant or literal on the left.

```js
if ( 42 === answer ) {
	// ...
}
```

## Ternaries

Ternaries should not be nested.

```js
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

Avoid unneeded ternary statements.

```js
// No need to use "a ? a : b".
const foo = a || b;

// No need to use "c ? true : false".
const bar = Boolean( c );

// No need to use "c ? false : true".
const baz = ! c;
```

## `if` Statements

If the `else` block of an `if`-`else` statement only contains another `if` statement, use `if`-`else if` (and potential one or more subsequent `else if` blocks, and one potential `else` block).

```js
if ( 42 === answer ) {
	// ...
} else if ( 23 < answer ) {
	// ...
} else if ( 0 > answer ) {
	// ...
} else {
	// ...
}
```

## `switch` Statements

When using a `switch` statement, use a `break` for each case other than `default`.
Insert an optional newline after each `break` to further increase readability.

```js
switch ( answer ) {
	case 42:
		// ...
		break;

	case 23:
		// ...
		break;

	default:
		// ...
}
```

Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

```js
switch ( foo ) {
	case 0:
		bar();
		break;

	case 1: {
		let x = 1;
		break;
	}

	case 2: {
		const y = 2;
		break;
	}

	case 3: {
		function f() {}
		break;
	}

	default: {
		class C {}
	}
}
```

## Strings

Use single quotes for string literals.
When a string contains single quotes, escape them with a backslash (i.e., `\'`).

```js
const someString = 'Strings should go in single quotes, which make them \'single-quoted strings\'.';
```

When programmatically building up strings, use template strings instead of concatenation.

```js
function sayHi( name ) {
	console.log( `Hi there, ${name}.` );
}
```

## Objects

To create an object, use an object literal, `{}`, instead of `new Object()`.
Initialization can be done during construction.

```js
const someObject = { name: 'Inpsyde JavaScript Style Guide' };
```

If the object requires a specific prototype, provide and use a dedicated constructor function.

```js
function Guide() {
	const name = 'Inpsyde JavaScript Style Guide';

	return {
		name,

		outputName() {
			console.log( name );
		}
	};
}

const guide = new Guide();

guide.outputName();
```

Object properties should be accessed via dot notation, unless the key is a variable, a reserved word, or a string that would not be a valid identifier.

```js
value = someObject.propertyName;
value = someObject[ someKey ];
value = someObject['default'];
value = someObject['key-with-hyphens'];
```

Use computed property names when creating objects with dynamic property names.

```js
const someObject = {
	id: 42,
	[ propertyName ]: true,
	[ getRandomKey() ]: 'foo'
};
```

Use both object method and property value shorthands, and group shorthand properties at the beginning of your object.

```js
const name = 'Inpsyde JavaScript Style Guide';

const guide = {
	name,
	id: 42,

	outputName() {
		console.log( name );
	}
};
```

Do not call `Object.prototype` methods directly (e.g., `hasOwnProperty`, `propertyIsEnumerable`, or `isPrototypeOf`) as they can be shadowed by properties on the object itself.

```js
if ( Object.prototype.hasOwnProperty.call( someObject, someKey ) ) {
	// Do something with someObject.someKey then.
}
```

## Arrays

To create an array, use the shorthand `[]` constructor instead of `new Array()`.
Initialization can be done during construction.

```js
const someArray = [ 'Inpsyde', 'JavaScript', 'Style', 'Guide' ];
```

Use the spread operator `...` to copy an array.

```js
const clonedArray = [ ...originalArray ];
```

Use `Array.from()` to convert an array-like object to a real array.

```js
const $paragraphs = Array.from( document.getElementsByTagName( 'p' ) );
```

Use return statements in array method callbacks.
For a simpple arrow function, you can use the implicit return notation.

```js
[ 1, 2, 3 ].map( function( x ) {
	return x + 1;
} );

[ 1, 2, 3 ].map( ( x ) => x + 1 );
```

## Destructuring

Use object destructuring when accessing and using multiple properties of an object.

```js
function getUserName( user ) {
	const { firstName, lastName } = user;

	return `${firstName} ${lastName}`;
}

function getUserNameOptimized( { firstName, lastName } ) {
  return `${firstName} ${lastName}`;
}
```

Use array destructuring instead of manually extracting values.
This is also very useful if you have to swap the values of two variables.

```js
const someNumbers = [ 1, 2 ];

[ max, min ] = someNumbers;

if ( max < min ) {
	// Swap the values.
	[ max, min ] = [ min, max ];
}
```

## Iterators

Do not use iterators.
Use native higher-order functions instead.

When dealing with arrays, you can use, for instance, `map()`, `filter()`, `reduce()`, `find()` and `every()`, just to name a few.
When dealing with objects, use `Object.keys()`, `Object.values()`, or even `Object.entries()` to fetch the desired data in array form first.

## Functions

Use function declarations instead of function expressions, as the former are easier to identify in call stacks, and their whole body is hoisted.

Wrap immediately invoked function expressions (IIFE) in parentheses to highlight both declaration and call are bundled into a single unit.

```js
(function () {
	console.log( 'Howdy!' );
}());
```

Do not put function declarations inside the body of a loop.
Assigning a function expression to a variable is okay, though.

```js
let getCapabilities = () => [ 'read' ];

if ( isUserAdmin() ) {
	getCapabilities = () => getAdminCapabilities();
}
```

Never name a parameter `arguments`.
This will take precedence over the `arguments` object that is given to every function scope.

Never use `arguments`, instead use the rest syntax.

```js
function getFormula( ...summands ) {
	return `${summands.join( ' + ' )} = ${summands.reduce( ( sum, summand ) => sum + summand, 0 )}`;
}
```

Use default parameter syntax rather than mutating function arguments.

```js
function sayHi( name = 'Jane Doe' ) {
	console.log( `Hi there, ${name}.` );
}
```

## Arrow Functions

When using function expressions, use arrow function notation.
If the function body consists of a single expression, omit the braces and use the implicit return.
Always use parentheses around the parameters, even if there is only one.

```js
[ 1, 2, 3 ].map( ( x ) => x + 1 );

[ 1, 2, 3 ].map( ( number, index ) => ({ index: number }) );
```

## Scope

Do not save references to `this`, instead use either arrow functions or `.bind()`.

```js
class Foo {
	bar() {
		setTimeout( () => {
			console.log( this );
		}, 200 );
	}

	baz() {
		setTimeout( function() {
			console.log( this );
		}.bind( this ), 200 );
	}
}
```

## Classes

Always use `class`, and do not manipulate an object's `prototype` directly.
For inheritance, use `extends`.
Since classes have a default constructor if there is none explicitly specified, there is no need for an empty constructor function or one that just delegates to a parent class.

```js
class Administrator extends User {
	constructor( ...constructorArguments  ) {
		super( ...constructorArguments );

		this.role = 'administrator';
	}
}
```

Do not use JavaScript getters or setters as they cause unexpected side effects and are harder to test, maintain, and reason about.
Use custom accessor functions instead.

```js
class User {
	getName() {
		return this.name || '';
	}

	setName( name = '' ) {
		this.name = name;
	}
}
```

## Modules

Always use modules (i..e, `import`, and`export`) over a non-standard module system; you can always transpile to your preferred module system.
Only import from a path or module in one place.
Put all `import` statements to the top of your file.

```js
import { foo, bar } from 'foo-bar';
import Renderer from 'renderer';

const renderer = new Renderer( foo );
renderer.render( bar );
```

Only export immutable references (e.g., `class`, `const`, or `function`).
In modules with a single export, prefer default export over named export.

## Events

When attaching data payloads to events, pass a hash instead of a raw value.
This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event.

```js
this.trigger( 'modelUpdated', { modelId: model.id } );

// ...

this.on( 'modelUpdated', ( e, data ) => {
	// Do something with data.modelId.
} );
```

## Linters

We provide config files for both [ESLint](http://eslint.org) and [JSHint](http://jshint.com), although we strongly encourage to use the way more powerful and flexible ESLint.

In order to have a look at the files for linting _modern_ JavaScript code, please refer to the [`configs/`](configs/) folder.
If you want to lint ES5 code, see [`configs/es5`](configs/es5) instead.

## Kudos

This style guide is heavily influenced by the [WordPress JavaScript Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/) and the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

> We're releasing it under the MIT license, so please feel free to fork and use at your will. We don't expect everyone to agree with the way we do things, but we do hope this can help kick start your own style guide as a template or map of some sort.  
> &mdash;[Airbnb JavaScript Style Guide Wiki](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

Yes, this helped indeed, so thanks a lot for all the effort you put into this!

## License

Copyright (c) 2016 Inpsyde GmbH

This code is licensed under the [MIT License](LICENSE).
