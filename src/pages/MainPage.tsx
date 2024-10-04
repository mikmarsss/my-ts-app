import React, { useEffect, useState } from "react";
import UserCard from "../widgets/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { archiveUser, fetchUsers, hideUser, showUser } from "../features/user/userSlice";
import { AppDispatch, RootState } from "../app/stores/userStore";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text";
import Line from "../shared/ui/Line";
import { UserModel } from "../entities/Models/userModel";
import ArchivedUserCard from "../widgets/ArchivedUserCard";

const MainPage: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()

    const users = useSelector((state: RootState) => state.user.users)
    const hiddenUsers = useSelector((state: RootState) => state.user.hiddenUsers);
    const archivedUsers = useSelector((state: RootState) => state.user.archivedUsers);
    const loading = useSelector((state: RootState) => state.user.loading)
    const error = useSelector((state: RootState) => state.user.error)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <Container display={'flex'} flexDirection={'column'} width={'80.56%'} margin={'40px 0 0 0'}>
                <Text fontFamily={'Manrope-SemiBold'} fontSize={'24px'} color={'#161616'} >
                    Активные
                </Text>
                <Line margin={'16px 0 0 0'} />
                <Container display={'flex'} flexDirection={'row'} gap={'40px'} flexWrap={'wrap'} margin={'28px 0 0 0'}>
                    {
                        users.map((user) => (
                            <Container key={user.id}>
                                <UserCard user={user} />
                            </Container>
                        ))
                    }
                </Container>
                <Text fontFamily={'Manrope-SemiBold'} fontSize={'24px'} margin={'40px 0 0 0'} color={'#161616'} >
                    Архив
                </Text>
                <Line margin={'16px 0 0 0'} />
                <Container display={'flex'} flexDirection={'row'} gap={'40px'} flexWrap={'wrap'} margin={'28px 0 0 0'}>
                    {
                        archivedUsers.map((user) => (
                            <Container key={user.id}>
                                <ArchivedUserCard user={user} />
                            </Container>
                        ))
                    }
                </Container>
            </Container>


        </>
    )
}

export default MainPage