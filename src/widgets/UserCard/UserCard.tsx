import React, { useState } from "react";
import Container from "../../shared/ui/Container";
import vi from '../../assets/images/600x0_kuwlfjqjesfqhckw_jpg_3369.jpg'
import Image from "../../shared/ui/Image";
import Text from "../../shared/ui/Text";
import { UserModel } from "../../entities/Models/userModel";
import DropDawnMenu from "../../shared/ui/DropDawnMenu";
import DotsButton from "../../shared/ui/DotsButton";
import { useSelector } from "react-redux";
import { RootState } from "../../app/stores/userStore";


interface UserCardProps {
    user: UserModel
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    const [showMenu, setShowMenu] = useState(false)


    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <Container position={'relative'} width={"360px"} gap={'20px'} height={"168px"} backgroundColor={"#FDFDFD"} borderRadius={"16px"} display={"flex"} padding={"24px"}>
                <Container width={"112px"} height={'120px'} borderRadius={'8px'} backgroundColor={'black'}>
                    <Image src={vi} width={"100%"} height={"100%"} borderRadius={"8px"} objectFit={'cover'} />
                </Container>
                <Container display={'flex'} flexDirection={'column'} width={'180px'} height={'120px'} justifyContent={'space-between'}>
                    <Container display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Container display={'flex'} justifyContent={'space-between'} alignItems={'start'}>
                            <Text fontFamily={"Manrope-SemiBold"} color={"#22A0BC"} fontSize={"20px"}>
                                {user.name}
                            </Text>
                            <button onClick={showMenuHandler}>
                                <DotsButton isShow={showMenu} />
                            </button>
                        </Container>
                        <Text fontFamily={"Manrope-Medium"} color={"#595959"} fontSize={"16px"}>
                            {user.company.name}
                        </Text>
                    </Container>
                    <Text fontFamily={"Manrope-Medium"} color={"#9C9C9C"} fontSize={"14px"}>
                        {user.address.city}
                    </Text>
                </Container>
                {
                    showMenu &&
                    <DropDawnMenu user={user} />
                }
            </Container>

        </>
    )
}

export default UserCard