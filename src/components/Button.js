import '../style/components/Button.css';

function Button({text, address}){
    return (
        <div className="button">
            <a href={address}>
                <input type="button" value={text}/>
            </a>
        </div>
    );
}

export default Button;