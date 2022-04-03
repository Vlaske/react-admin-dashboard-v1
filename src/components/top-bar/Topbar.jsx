import React from 'react'
import "./topbar.css"
import {Notificationsnone, Language, Settings, NotificationsNone} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>vlaskeadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7DNwD5SxB0w/profile-displayphoto-shrink_800_800/0/1626112582828?e=1651708800&v=beta&t=tt49dy2_gd9ISOmlAkZk2AEE0-MYpXNZLN3FHwJSTSA" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
