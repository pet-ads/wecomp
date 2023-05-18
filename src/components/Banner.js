import '../style/components/Banner.css';

function Banner({ bannerImage, canvasBackgroundColor, children }) {
    return (
        <div 
            className="banner" 
            style={{ 
                backgroundImage: (bannerImage ? `url(${bannerImage})` :  'none')
            }}
        >
            <div 
                style={{ 
                    backgroundColor: 
                        (canvasBackgroundColor ? `${canvasBackgroundColor}86` : "") 
                }}
            >
                { children }
            </div>
        </div>
    );
}

export default Banner;
