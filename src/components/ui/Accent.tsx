/**
 * Renders `text` with the first occurrence of `accent` set in the italic serif.
 * Falls back to plain text when the accent isn't found (e.g. missing translation).
 */
export default function Accent({ text, accent }: { text: string; accent?: string }) {
    if (!accent) return <>{text}</>;
    const i = text.toLocaleLowerCase().indexOf(accent.toLocaleLowerCase());
    if (i < 0) return <>{text}</>;
    return (
        <>
            {text.slice(0, i)}
            <span className="serif">{text.slice(i, i + accent.length)}</span>
            {text.slice(i + accent.length)}
        </>
    );
}
