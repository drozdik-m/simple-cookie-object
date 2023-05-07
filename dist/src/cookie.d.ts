export declare class Cookie {
    private name;
    private value;
    private path;
    constructor(name: string, path?: string);
    /**
    * Searches in document.cookie and returns cookies value - O(n)
    * @returns Value of the cookie. Null if the cookie has not been found.
    */
    Get(): string;
    /**
    * Returns cached cookie value - O(1)
    * @returns Cached cookie value (saved on last Get(), Set() or Exists())
    */
    GetCached(): string;
    /**
     * Sets cookie with value and expiration date
     * @param value Cookie value
     * @param daysToExpire Days to expire
     */
    Set(value: string, daysToExpire?: number, path?: string): void;
    /**
    * Delete this cookie from document.cookie
    */
    Delete(): void;
    /**
    * Checks if the cookies exists in document.cookie - O(n)
    * @returns True if cookie exists
    */
    Exists(): boolean;
    /**
    * Checks if the cookies exists, based on cached value - O(1)
    * @returns True if cookie exists
    */
    ExistsCached(): boolean;
    /**
     * Refreshes cookies expire date - O(n)
     * @param newDaysToExpire New day expiration count from now
     */
    RefreshExpireDate(newDaysToExpire: number): void;
    /**
     * Refreshes objects cached value - O(n)
     */
    RefreshCache(): void;
}
