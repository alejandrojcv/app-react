import  "./User.css";
function User(props) {
    const { name, surname } = props;
    return (
        <div clasName= "user">
            <ul className="user-data"
             style={{
                display: "flex",
                justifyContent: "center",
                direction: "row",
                gap: "0.5rem"
             }}
             
             >
              <span>
                Bienvenido:
              </span>  
              <span>
                {name}
              </span>  
              <span>
                {surname}
              </span>          
            </ul>   
        </div>
    );
}

export default User;