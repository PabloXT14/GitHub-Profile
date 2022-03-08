import { FiSearch } from 'react-icons/fi';
import {
    HeaderInput,
    HeaderInputContainer,
    HeaderSearchButton,
    HeaderSection,
    HeaderTitle
} from "./style";

export function Header() {
    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput />
                <HeaderSearchButton>
                    <FiSearch />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}