import '../style/components/Button.css';

function Button({text, address}){
    return (
        <div className="button">
            <form action={address}>
                <input type="button" value={text}/>
            </form>
        </div>
    );
}

export default Button;