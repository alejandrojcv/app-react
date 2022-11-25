import User from './User/User';
function ItemListContainer(props) {
    const {children} = props;
    const user = {
        name:'Alejandro',
        surname: 'Cañadas'
    }

    return (
        <div clasName= "item-container">
            <User name={user.name} surname={user.surname}/>
            {children}
        </div>
        
    );
}

export default ItemListContainer;