import { encode, decode } from 'url-safe-base64';

export class StringUtils {
    public static isNull = (str: unknown): boolean => {
        if (str === null || str === undefined) return true;

        const stringifiedValue = `${str as string}`;

        if (stringifiedValue.toLowerCase() === 'null' || stringifiedValue.trim() === '')
            return true;

        return false;
    };

    public static isEmpty = (str: unknown): boolean => {
        if (str === null || str === undefined) return true;

        const stringifiedValue = `${str as string}`;

        if (stringifiedValue.trim() === '') return true;

        return false;
    };

    /**
     * Convert ASCII string into Base64
     * @param {*} str
     */
    public static encodeBase64 = (str: string): string => {
        const buff = Buffer.from(str, 'ascii');

        return buff.toString('base64');
    };

    /**
     * Convert Base64 into ASCII string
     * @param {*} str
     */
    public static decodeBase64 = (str: string): string => {
        try {
            return window.atob(str);
        } catch (e) {
            console.error(e);
        }

        return '';
    };

    /**
     * Url safe encode
     * @param {*} str
     */
    public static encodeURLSafeBase64 = (str: string): string => {
        return encode(StringUtils.encodeBase64(str));
    };

    /**
     * Url Safe decode, encoded with this apps encoder
     * @param {*} str
     */
    public static decodeURLSafeBase64 = (str: string): string => {
        return decode(str);
    };

    /**
     * Convert ascii string into base64
     * @param {*} str
     */
    public static encodeStrToBase64 = (str: string): string => {
        const strMod = unescape(encodeURIComponent(str));

        const buff = Buffer.from(strMod, 'ascii');

        return buff.toString('base64');
    };

    public static getCapitalizeStr = (str: string): string =>
        str ? str[0].toUpperCase() + str.slice(1) : '';

    public static isString(str: unknown): boolean {
        return typeof str === 'string' || str instanceof String;
    }
}
