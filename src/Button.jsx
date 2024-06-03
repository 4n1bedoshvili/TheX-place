function Button({ text, type = "primary" }) {
    const buttonSty = {
        backgroundColor: type === "secondary" ? 'transparent' : '#00FF40',        
        border: type === "secondary" ? '2px solid rgba(204, 212, 255, 0.11)' : 'none',
        borderRadius:'10px',
        fontWeight:'600',
        fontSize:'16px',
        lineHeight:'20px',
        color:type === "secondary" ? 'White' : 'Black',
        fontFamily: 'Space Grotesk',
        padding:'10px 15px',
        transition:'0.5ms',
        cursor:'pointer'
    }
    const buttonClass =  type === "secondary" ? 'secondary-button' : 'just-button';        
    return (
        <button style={buttonSty} className={buttonClass}>
            {text}
        </button>
    );
}

export default Button;
