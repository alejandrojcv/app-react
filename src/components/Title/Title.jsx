import  "./Title.css";
function Title(props) {
    const { label } = props;
    return (
        <h1 className= "title" >{label}</h1>
    );
}
export default Title;
