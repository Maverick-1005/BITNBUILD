import { useParams } from "react-router-dom";
function User(){
    const {id} = useParams()
    return(
        <div className="bg-cyan-600 p-5">User: {id}</div>
    )
}
export default User