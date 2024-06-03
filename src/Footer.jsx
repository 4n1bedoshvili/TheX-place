function Footer(){
    return <div style={{
        backgroundColor:'#213547',
        width:'100%',
        position:'absolute',
        bottom:'0',
        borderRadius:'20px',
        padding:'50px',
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'column'
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <img src="/images/thexplace-logo.png" alt="Footer-logo" />
            <span style={{
                fontFamily: 'Space Grotesk',
                fontWeight:'400',
                fontSize:'16px',
                color:'rgba(229, 234, 255, 0.6)'
            }}>&copy; TheXPlace 2021 </span>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'10%'

        }}>
            <ul>
                <FooterItem text="For Talent"/>
                <FooterItem text="Find Talent"/>
                <FooterItem text="Jobs"/>
            </ul>
            <ul>
                <FooterItem text="About"/>
                <FooterItem text="FAQ"/>
            </ul>
            <ul>
                <FooterItem text="Terms Of Service"/>
                <FooterItem text="Contact Us"/>
            </ul>
            <div>
                <Logo src="/twitter.png"/>
                <Logo src="/linkedin.png"/>
                <Logo src="/facebook.png"/>
                <Logo src="/Discord.png"/>
            </div>
        </div>
    </div>
}

function FooterItem(props){
    return <li style={{
        fontFamily: 'Space Grotesk',
        fontWeight:'400',
        fontSize:'16px',
        color:'rgba(229, 234, 255, 0.6)',
        listStyle:'none',
        margin:'20px '
    }}>
        {props.text}
    </li>;
}
function Logo(props) {
    return (
        <img src={props.src} alt={props.alt} />
    );
}

export default Footer