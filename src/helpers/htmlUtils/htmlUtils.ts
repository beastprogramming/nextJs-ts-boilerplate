export class HTMLUtils {
    private static isValidHTMLDOMParserCheck(html: string): boolean | string | undefined {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        if (doc.documentElement.querySelector('parsererror')) {
            return doc?.documentElement?.querySelector<HTMLElement>('parsererror')?.innerText;
        }
    }

    public static isValidHTMLDOMParser(html: string): boolean {
        const isValid = HTMLUtils.isValidHTMLDOMParserCheck(html);
        console.log('[HTMLUtils]:  HTML String Validation', isValid);

        return isValid as boolean;
    }

    public static disableUserInteraction(): void {
        const body = document.body;

        if (body) {
            body.style.pointerEvents = 'none';
        }
    }
}
