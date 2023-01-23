export default function Header(props) {
    return (
        <header className="header">
            <img
                src={`./images/${props.img}`} 
                className="header--image"
                alt="Troll Face"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}
