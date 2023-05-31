function ClickableImage({image, alt, link, className, text}){
    return (
        <>
            <a href={link} target="_blank">
                <img className={className} src={image} alt={alt}></img>
            </a>
            <p>{text}</p>
        </>
    );
}

export default ClickableImage;