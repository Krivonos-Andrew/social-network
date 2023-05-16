import s from './ProfileCard.module.scss'
import profileCard from "./index.ts";

export const ProfileCard = () => {
    return (
        <>
            <div className={s.wrap}>
                <div className={s.img}>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=b9085a3a230ddc5acf42b5c101b623a7-4568063-images-thumbs&ref=rim&n=33&w=150&h=150"
                        alt="Avatar"/>
                </div>
                <ul className={s.info}>
                    <li><h2>{profileCard.name}</h2></li>
                    <li>Date of Birth: {profileCard.date}</li>
                    <li>City: {profileCard.city}</li>
                    <li>Education: {profileCard.education}</li>
                    <li>Web Site: {profileCard.web}</li>
                </ul>
            </div>
        </>
    )
}