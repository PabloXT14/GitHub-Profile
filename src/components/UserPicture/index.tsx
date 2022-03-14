import { Conatiner, ProfilePicture } from "./styles";

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