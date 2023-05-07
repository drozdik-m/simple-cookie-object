

//--------------------------------------------------
//----------COOKIE----------------------------------
//--------------------------------------------------
export class Cookie
{
    //--------------------------------------------------
    //----------VARIABLES-------------------------------
    //--------------------------------------------------
    private name: string = "";
    private value: string = null;
    private path: string = "/";


    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    constructor(name: string, path: string = "/")
    {
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
    Get(): string
    {
        //Get cookies string
        let cookies = ";" + document.cookie + ";";

        //Match searched cookie
        let regexMatch = cookies.match(new RegExp(`; ?${this.name}=([^;]*);`));

        //Found the value
        if (regexMatch != null)
            this.value = regexMatch[1];
        //Did not found the value
        else
            this.value = null;

        return this.value;
    }

    /**
    * Returns cached cookie value - O(1)
    * @returns Cached cookie value (saved on last Get(), Set() or Exists())
    */
    GetCached(): string
    {
        return this.value;
    }


    /**
     * Sets cookie with value and expiration date
     * @param value Cookie value
     * @param daysToExpire Days to expire
     */
    Set(value: string, daysToExpire: number = 365, path: string = this.path)
    {
        //Get expiration date
        let date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 86400000)); // 24 * 60 * 60 * 1000

        //Set the cookie
        document.cookie = `${this.name}=${value};expires=${date.toUTCString()};path=${path}`;

        //Update cached value
        this.value = value;
        this.path = path;
    }

    /**
    * Delete this cookie from document.cookie
    */
    Delete ()
    {
        this.Set("null", -1);

        this.value = null;
    }

    /**
    * Checks if the cookies exists in document.cookie - O(n)
    * @returns True if cookie exists
    */
    Exists(): boolean
    {
        return this.Get() !== null;
    }

    /**
    * Checks if the cookies exists, based on cached value - O(1)
    * @returns True if cookie exists
    */
    ExistsCached(): boolean
    {
        return this.value !== null;
    }

    /**
     * Refreshes cookies expire date - O(n)
     * @param newDaysToExpire New day expiration count from now
     */
    RefreshExpireDate(newDaysToExpire: number)
    {
        this.Set(this.Get(), newDaysToExpire, this.path);
    }

    /**
     * Refreshes objects cached value - O(n)
     */
    RefreshCache()
    {
        this.value = this.Get();
    }
}
