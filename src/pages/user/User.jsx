import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7DNwD5SxB0w/profile-displayphoto-shrink_800_800/0/1626112582828?e=1651708800&v=beta&t=tt49dy2_gd9ISOmlAkZk2AEE0-MYpXNZLN3FHwJSTSA"  alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Luka Vlasic</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">lukavlasic97</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">23.12.1997</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+381 69 023 223</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">lukavlasic97@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Belgrade | Serbia</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="lukavlasic97" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Luka Vlasic" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="lukavlasic97@gmail.com" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+381 69 023 223" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Belgrade | Serbia" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7DNwD5SxB0w/profile-displayphoto-shrink_800_800/0/1626112582828?e=1651708800&v=beta&t=tt49dy2_gd9ISOmlAkZk2AEE0-MYpXNZLN3FHwJSTSA" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
