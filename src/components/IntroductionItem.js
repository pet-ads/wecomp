import '../style/components/IntroductionItem.css';

function IntroductionItem({ introductionPhoto, name, title, horizontal }) {
    function showTitleIfPresent() {
        if (!title)
            return <></>
        return <p>{ title }</p>
    }

    return (
        <div className={ `${ horizontal ? 'horizontal' : 'vertical' } introduction-item` } >
            <div className="introduction-photo" >
                <img src={ introductionPhoto } alt={ name } />
            </div>
            <div className="description">
                <h4>{ name }</h4>
                { showTitleIfPresent() }
            </div>
        </div>
    );
}

export default IntroductionItem;
