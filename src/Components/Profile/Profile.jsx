import { useState } from "react";
import ProfileInfo from "./ProfileInfo";


const Profile = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = () => setOpen( () => !open)
    return (
        <div onClick={handleOpen} className="relative">
            <h1>profile</h1>
            <div className={`absolute -ml-36 ${open? 'hidden':'duration-700'}`}>
                <ProfileInfo/>
            </div>
        </div>
    );
};

export default Profile;