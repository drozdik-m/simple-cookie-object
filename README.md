# Cookie

"Cookie" is a **simple front-end cookie handling class**. This module is easy to use, light, small and has **no dependencies**.

The module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 123456789 modules and does not offer unseen JavaScript magic. Download this, save an hour of your time and use it to create something awesome and efficient. We #keepItSimple.**

## Download

You can download the module on [GitHub/simple-cookie-object](https://github.com/drozdik-m/simple-cookie-object) or using [npm/simple-cookie-object](https://www.npmjs.com/package/simple-cookie-object) service.

**There is a testing environment available only on GitHub**. If you want to play with beautiful friendly interface and understand the class very quickly, please clone the project from GitHub and open tests/index.html.

```
npm install simple-cookie-object --save
```

## Cookie - What is that?

Cookie is a **way to store information across pages** on client-side device.

Common example of cookies usage is to remember a session. If you log into some page using your account information, session cookie is saved into your browser. With every request to the server, the cookie is send, so the server knows, that you are already logged in. Without cookies, you would have to login repeatedly, like a crazy person.

Summary: **Cookie is an information saved on client-side device, shared between multiple pages.**

## Usage

### Import and create new Cookie

You can import the module using __import__ keyword or __require__ function.

```javascript
import { Cookie } from "simple-cookie-object";

//Instantiate new Cookie
var myCookie = new Cookie("myCookieName");

```

```javascript
var C = require("simple-cookie-object")

//Instantiate new Cookie
var myCookie = new C.Cookie("myCookieName");

```
### Cookie methods

**Cookie class is just a messenger between document.cookie and you.** All searching and retrieving is done using regular expressions for maximum efficiency. 

The Cookie class comes equipped with cache functionality. Whenever you save or load data to document.cookie, the cache value is changed, to remembers current cookies value without need to look into document.cookie, which eliminates the need to search. If you have instances of Cookie objects with unique names, you can use all "caching" method, which will result in much more efficient behavior. But, if you have multiple Cookie instances with the same cookie name (they point to the same cookie in document.cookie), you need to use basic search methods, because cache may be wrong in one of the duplicate instances.

Working with Cookie class is easy. Here are all implemented methods:

```javascript

//Instantiate new Cookie
var myCookie = new Cookie("myCookieName"); //Cookie will save current cookies value from document.cookie into the Cookie class cache

//Instantiate new Cookie with path (default path is "/")
var myCookieDifferentPath = new Cookie("myCookieName", "/subpage/");

myCookie.Get(); //Searches document.cookie and returns found value
//Also caches the value for future handling (no need to search again)
//Returns "null" if the cookie is not in the document.cookie

myCookie.GetCached(); //Returns cached value
//If you do not have multiple instances with the same cookie name, feel free to use GetCached() instead of Get() -> much faster

myCookie.Set("newValue") //Sets new value and caches it
//Overloaded methods:
myCookie.Set("newValue", 100) //Cookie expires in 100 days (default is 365) 
myCookie.Set("newValue", 100, "/subpage/") //Cookie is saved with "/subpage/" path (default is the path from the constructor)

myCookie.Delete(); //Deletes the cookie from document.cookie
//Sets the cached value to "null"

myCookie.Exists(); //Returns true if the cookie exists in the document.cookie

myCookie.ExistsCached(); //Returns true if the cookie exists in the document.cookie using cached value
//If you do not have multiple instances with the same cookie name, feel free to use ExistsCached() instead of Exists() -> much faster

myCookie.RefreshExpireDate(100); //Sets the cookie to expire in 100 days

myCookie.RefreshCache(); //If you use multiple instances with the same cookie name and you want to use cache, refresh the cache before usage

```

### More examples

There is a testing file included in this module ("simple-cookie-object/tests/scripts/cookie_tests/cookie_tests.ts" for TypeScript or "simple-cookie-object/tests/scripts/cookie_tests/cookie_tests.js" for JavaScript). You may find more examples of the Cookie class there. Tests are available only on [GitHub/simple-cookie-object](https://github.com/drozdik-m/simple-cookie-object).

**If you want to learn about this class using nice and friendly interface, clone [GitHub/simple-cookie-object](https://github.com/drozdik-m/simple-cookie-object) and open simple-cookie-object/tests/index.html.**

___

Sorry for my English, I hope it's readable.