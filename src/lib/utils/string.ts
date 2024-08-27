type Options = {
    chars: number;
    breakWord?: boolean;
};

export function splitStr(str: string, { breakWord = true, chars }: Options) {
    const arr = [];

    if (breakWord) {
        for (let i = 0; i < str.length; i += chars) {
            arr.push(str.substring(i, i + chars));
        }
        return arr;
    } else {
        const words = str.split(' ');
        let line = '';
        for (const word of words) {
            if (line.length + word.length > chars) {
                arr.push(line);
                line = '';
            }
            line += `${word} `;
        }
        if (line.length) arr.push(line);
        return arr;
    }
}
