import Button from './Button'
import "@fontsource/space-grotesk"; 

function Header() {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            width:'100vw',
            justifyContent:'space-between',
            boxSizing:'border-box',
            position:'fixed',
            top:'0',
            padding:'0 10%'
        }} >
            <img src="/images/thexplace-logo.png" alt="The-X-place-Logo" />
            <div>
                <ul style={{
                    display:'flex',
                    alignItems:'center',
                    gap:'15px'
                }}>
                    <NavItem text="About"/>
                    <NavItem text="For Talent"/>
                    <NavItem text="Find Talent"/>
                    <NavItem text="Jobs"/>
                    <Button text="Sign In"  type = "secondary"/>
                    <Button text="Join"/>
                </ul>
            </div>
        </div>
    );
}

function NavItem(props) {
    return <li style={{
        listStyle:'none',
        fontWeight:'600',
        fontSize:'16px',
        lineHeight:'20px',
        color: 'white',
        fontFamily: 'Space Grotesk',
        cursor:'pointer'
    }}>{props.text}</li>;
}

export default Header
