import { Conatiner, ProfilePicture } from "./style";

/* ===== TIPAGENS ===== */
interface UserPictureProps {
    imageUrl: string;
    alternativeText: string;
}



export function UserPicture({ imageUrl, alternativeText }: UserPictureProps) {
    return (
        <Conatiner>
            <ProfilePicture src={imageUrl} alt={alternativeText} />
        </Conatiner>
    );
}