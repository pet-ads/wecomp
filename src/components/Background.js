import '../style/components/Parallax.css';

function Background(){
    return (
        <>
            <div className="parallax_layer_back parallax__layer">
                <img className="parallaxImage1" alt="parallax" src="../logos/Subtract3.png"/>
                <img className="parallaxImage2" alt="parallax" src="../logos/Subtract3.png"/>
                
            </div>
           { /*<div className="parallax_layer_back_image_test1 parallax__layer"></div>
            <div className="parallax_layer_back_image_test2 parallax__layer"></div>
            <div className="parallax_layer_back_image_test3 parallax__layer"></div> */}
        </>
    )
}

export default Background;