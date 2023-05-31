import '../style/components/Button.css';

function Button({text, address, action, alt}){
    return (
        <div className="button">
            <a href={address}>
                <input type="button" value={text} onClick={action}/>
            </a>
        </div>
    );
}

export default Button;