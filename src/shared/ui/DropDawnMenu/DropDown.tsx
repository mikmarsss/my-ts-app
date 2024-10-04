import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Text from "../Text";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/stores/userStore";
import { archiveUser, hideUser, showUser } from "../../../features/user/userSlice";
import { UserModel } from "../../../entities/Models/userModel";
import { useNavigate } from "react-router-dom";
import { EDIT, USER } from "../../../app/routes/utils";

const StyledDropDown = styled.div`
    background-color: #FDFDFD;
    border: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    box-shadow:0 0 2px #5A5A5A;
    border-radius: 12px;
    top: 50px;
    right: 20px;
    justify-content: center;
    gap: 8px;
    
`

interface DropDownProps {
    user: UserModel;
}

const DropDown: React.FC<DropDownProps> = ({ user }) => {

    const dispatch: AppDispatch = useDispatch()

    const navigate = useNavigate()

    const users = useSelector((state: RootState) => state.user.users)
    const hiddenUsers = useSelector((state: RootState) => state.user.hiddenUsers);
    const archivedUsers = useSelector((state: RootState) => state.user.archivedUsers);

    const handleHideUser = (user: UserModel) => {
        dispatch(hideUser(user));
    };

    const handleShowUser = (user: UserModel) => {
        dispatch(showUser(user));
    };

    const handleArchiveUser = (user: UserModel) => {
        dispatch(archiveUser(user));
    };



    return (
        <>
            <StyledDropDown>
                {
                    users.some(users => users.id === user.id) &&
                    <Container width={'200px'} height={'146px'} padding={'8px'} boxSizing={'border-box'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'8px'}>
                        <button onClick={() => navigate(USER + EDIT + `/${user.id}`)}>
                            <Container width={'184px'} height='38px' display={'flex'} alignItems={'center'}>
                                <Text fontFamily={'Manrope-Medium'} fontSize={'16px'} margin={'0 0 0 12px'} >
                                    Редактировать
                                </Text>
                            </Container>
                        </button>
                        <button onClick={() => handleArchiveUser(user)}>
                            <Container width={'184px'} height={'38px'} display={'flex'} alignItems={'center'}>
                                <Text fontFamily={'Manrope-Medium'} fontSize={'16px'} margin={'0 0 0 12px'}>
                                    Архивировать
                                </Text>
                            </Container>
                        </button>
                        <button onClick={() => handleHideUser(user)}>
                            <Container width={'184px'} height={'38px'} display={'flex'} alignItems={'center'} boxSizing={'border-box'}>
                                <Text fontFamily={'Manrope-Medium'} fontSize={'16px'} margin={'0 0 0 12px'}>
                                    Скрыть
                                </Text>
                            </Container>
                        </button>
                    </Container>
                }
                {
                    archivedUsers.some(archivedUser => archivedUser.id === user.id) &&
                    <Container width={'200px'} height={'50px'} padding={'8px'} boxSizing={'border-box'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'8px'}>

                        <button onClick={() => handleShowUser(user)}>
                            <Container width={'184px'} height={'38px'} display={'flex'} alignItems={'center'} boxSizing={'border-box'}>
                                <Text fontFamily={'Manrope-Medium'} fontSize={'16px'} margin={'0 0 0 12px'}>
                                    Активировать
                                </Text>
                            </Container>
                        </button>
                    </Container>
                }
            </StyledDropDown>
        </>
    )
}

export default DropDown