import '../style/components/Banner.css';

function Banner({ bannerImage, children }) {
    return (
        <div 
            className="banner" 
            style={{ 
                backgroundImage: (bannerImage ? `url(${bannerImage})` :  'none')
            }}
        >
            { children }
        </div>
    );
}

export default Banner;
