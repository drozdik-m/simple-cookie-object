exports.__esModule = true;
//--------------------------------------------------
//----------COOKIE----------------------------------
//--------------------------------------------------
var Cookie = /** @class */ (function () {
    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    function Cookie(name, path) {
        if (path === void 0) { path = "/"; }
        //--------------------------------------------------
        //----------VARIABLES-------------------------------
        //--------------------------------------------------
        this.name = "";
        this.value = null;
        this.path = "/";
        this.name = name;
        this.path = path;
        //Update cache
        this.value = this.Get();
    }
    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
    * Searches in document.cookie and returns cookies value - O(n)
    * @returns Value of the cookie. Null if the cookie has not been found.
    */
    Cookie.prototype.Get = function () {
        //Get cookies string
        var cookies = ";" + document.cookie + ";";
        //Match searched cookie
        var regexMatch = cookies.match(new RegExp("; ?" + this.name + "=([^;]*);"));
        //Found the value
        if (regexMatch != null)
            this.value = regexMatch[1];
        //Did not found the value
        else
            this.value = null;
        return this.value;
    };
    /**
    * Returns cached cookie value - O(1)
    * @returns Cached cookie value (saved on last Get(), Set() or Exists())
    */
    Cookie.prototype.GetCached = function () {
        return this.value;
    };
    /**
     * Sets cookie with value and expiration date
     * @param value Cookie value
     * @param daysToExpire Days to expire
     */
    Cookie.prototype.Set = function (value, daysToExpire, path) {
        if (daysToExpire === void 0) { daysToExpire = 365; }
        if (path === void 0) { path = this.path; }
        //Get expiration date
        var date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 86400000)); // 24 * 60 * 60 * 1000
        //Set the cookie
        document.cookie = this.name + "=" + value + ";expires=" + date.toUTCString() + ";path=" + path;
        //Update cached value
        this.value = value;
        this.path = path;
    };
    /**
    * Delete this cookie from document.cookie
    */
    Cookie.prototype.Delete = function () {
        this.Set("null", -1);
        this.value = null;
    };
    /**
    * Checks if the cookies exists in document.cookie - O(n)
    * @returns True if cookie exists
    */
    Cookie.prototype.Exists = function () {
        return this.Get() !== null;
    };
    /**
    * Checks if the cookies exists, based on cached value - O(1)
    * @returns True if cookie exists
    */
    Cookie.prototype.ExistsCached = function () {
        return this.value !== null;
    };
    /**
     * Refreshes cookies expire date - O(n)
     * @param newDaysToExpire New day expiration count from now
     */
    Cookie.prototype.RefreshExpireDate = function (newDaysToExpire) {
        this.Set(this.Get(), newDaysToExpire, this.path);
    };
    /**
     * Refreshes objects cached value - O(n)
     */
    Cookie.prototype.RefreshCache = function () {
        this.value = this.Get();
    };
    return Cookie;
}());
exports.Cookie = Cookie;
