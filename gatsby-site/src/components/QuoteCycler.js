import React from "react"

const quotes = [
    "improvising recipes from stuff in my fridge.",
    "browsing Google Flights.",
    "lurking various sneaker and fashion forums.",
    "binging TV shows and movies on Netflix.",
    "curating my Spotify playlists and discovering new tracks.",
    "reading and catching up on manga.",
    "learning more about Android development.",
    "wasting money to feed my materialistic needs.",
    "browsing Reddit.",
    "staring at my ceiling.",
    "enveloped in a warm duvet, napping/sleeping."
]

const TextCycler = ({ messages }) => {
    // Default to the first message passed
    const [messageIndex, setMessageIndex] = React.useState(0);

    React.useEffect(() => {
        // Move on to the next message every `n` milliseconds
        let timeout;
        if (messageIndex < messages.length) {
            timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1500);
        } else {
            setMessageIndex(0)
        }
        return () => { clearTimeout(timeout); };
    }, [messages, messageIndex]);

    return <span>{messages[messageIndex]}</span>;
};

const QuoteCycler = () => (
    <p style={{
        height: `35px`
    }}>In my free time, I can be found <TextCycler messages={quotes} /></p>
)

export default QuoteCycler