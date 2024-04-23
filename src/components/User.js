import React, { useState } from "react";
import { Link } from "react-router-dom";

// const User = (props) => {
//     const [count] = useState('0');
//     return (
//         <>
//             <div className="card" style={{ width: 25 + 'rem' }}>
//                 <div className="card-body">
//                     <h5 className="card-title">User Name : {props.name}</h5>
//                     <p className="card-text">Location : Surat</p>
//                     <a href="#">Contect : 6355902099</a>
//                     <b>{count}</b>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default User;

export class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserInfo: {
                name: "pratik",
                location: "defult"
            }
        }
    }
    async componentDidMount() {
        const a = await fetch("https://api.github.com/users/desai-pratik");
        const b = await a.json();
        // console.log(b);

        this.setState({
            UserInfo: b
        })
    }


    render() {
        return (
            <>
                <div className="card" style={{ width: 20 + 'rem' }} >
                    <img src={this.state.UserInfo.avatar_url} />
                    <div className="card-body">

                        <h5 className="card-title"> User Name : {this.state.UserInfo.name}</h5>
                        <li>Contect : 6355902099</li> <br />
                        <p className="card-text">Location : {this.state.UserInfo.location}</p>
                        <Link className="btn btn-primary" to={this.state.UserInfo.html_url}>
                            github
                        </Link>

                    </div>
                </div>
            </>
        );
    }
}