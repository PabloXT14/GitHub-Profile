import { Link } from "react-router-dom";
import { Button } from "./style";
import { BsBoxArrowLeft } from 'react-icons/bs';


/* ===== TIPAGENS ===== */
interface BackButtonProps {
    route: string;
}



export function BackButton({ route }: BackButtonProps) {
    return (
        <Link to={route}>
            <Button>
                <BsBoxArrowLeft />
            </Button>
        </Link>
    );
}