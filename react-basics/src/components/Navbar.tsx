import './RegisterForm/index.scss';
const styles={
    list: {
        listStyle:"none",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"pink",
        color:"white",
        
        padding: "1.5rem",
    },
listItem: {
fontSize:20,
textDecoration:"none",
color:"white",
},
};
interface Iprops {
    companyName: string;
    aboutTxt:string;
    isLoggedIn:boolean;
    setIsLoggedIn:(val: boolean)=>void;
}
const Navbar = ({companyName, aboutTxt,isLoggedIn,setIsLoggedIn}:Iprops)=> {
   
return (
<nav>
    <ul style={styles.list}>
    <li><a href="" style={styles.listItem} >{companyName} </a></li>
        <li 
        ><a href="" style={styles.listItem} >Home</a></li>
        <li><a href="" style={styles.listItem} >{aboutTxt} </a></li>
        <li><a href="" style={styles.listItem}>Contact</a></li>
        <li>
            <button onClick={()=>{
                setIsLoggedIn(!isLoggedIn);
            }}>{isLoggedIn ? "Logout" : "Login"}</button></li>
    </ul>
</nav>
)
};
export default Navbar;