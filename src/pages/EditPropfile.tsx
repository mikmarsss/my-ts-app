import React, { useEffect, useState } from "react"
import Image from "../shared/ui/Image"
import Container from "../shared/ui/Container"
import arrowLeft from '../assets/images/arrowLeft.svg'
import Text from "../shared/ui/Text"
import vi from '../assets/images/600x0_kuwlfjqjesfqhckw_jpg_3369.jpg'
import Line from "../shared/ui/Line"
import Input from "../shared/ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/stores/userStore"
import { fetchUsers } from "../features/user/userSlice"
import { useParams } from "react-router-dom"
import { UserModel } from "../entities/Models/userModel"
import Button from "../shared/ui/Button"

const EditProfile: React.FC = () => {

    const params = useParams()
    const current = params.id

    const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [company, setCompany] = useState<string>("")
    const [validationError, setValidationError] = useState<boolean>(false)
    const [validationErrorText, setValidationErrorText] = useState<string>('')

    const dispatch: AppDispatch = useDispatch()

    const users = useSelector((state: RootState) => state.user.users)
    const hiddenUsers = useSelector((state: RootState) => state.user.hiddenUsers);
    const archivedUsers = useSelector((state: RootState) => state.user.archivedUsers);
    const loading = useSelector((state: RootState) => state.user.loading)
    const error = useSelector((state: RootState) => state.user.error)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    useEffect(() => {
        const currentId = Number(current)
        const user = users.find(user => user.id === currentId);
        setCurrentUser(user || null);
    }, [users])

    useEffect(() => {
        setName(currentUser?.name || "")
        setUsername(currentUser?.username || "")
        setEmail(currentUser?.email || "")
        setCity(currentUser?.address.city || "")
        setPhone(currentUser?.phone || "")
        setCompany(currentUser?.company.name || "")
    }, [currentUser])

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const companyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
        if (e.target.value === '') {
            setValidationError(true)
            setValidationErrorText('Одно или несколько полей не заполнены')
        } else {
            setValidationError(false)
            setValidationErrorText('')
        }
    }

    const saveDataHandler = () => {
        //здесь можно добавить данные в формдата и отправить на бек
    }


    return (
        <>

            <Container display={'flex'} flexDirection={'column'} width={'auto'} alignItems={'center'}>
                <Container display={'flex'} width={'100%'} height={'68px'} gap={'8px'} alignItems={'center'} justifyContent={'flex-start'}>
                    <Image src={arrowLeft} width={'28px'} />
                    <Text fontFamily={'Manrope-SemiBold'} fontSize={'20px'} color={'#595959'}>
                        Назад
                    </Text>
                </Container>
                <Container display={'flex'} width={'auto'} gap={'40px'} height="813" margin="24px 0 0 0">
                    <Container display={'flex'} flexDirection={'column'} width={'360px'} height={'auto'} backgroundColor={'#FDFDFD'} gap={'40px'} borderRadius={'16px'} padding={'40px'}>
                        <Image src={vi} width={'280px'} height={'485px'} borderRadius={'8px'} objectFit={'cover'} />

                        <Container display={'flex'} width={'280px'} flexDirection={'column'} gap={'24px'}>
                            <button>
                                <Container display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'12px'} >
                                    <Text color={'#161616'} fontFamily={'Manrope-SemiBold'} fontSize={'16px'} hoverColor="#22A0BC">
                                        Данные профиля
                                    </Text>
                                    <Line />
                                </Container>
                            </button>
                            <button>
                                <Container display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'12px'}>
                                    <Text color={'#9C9C9C'} fontFamily={'Manrope-SemiBold'} fontSize={'16px'} hoverColor="#22A0BC">
                                        Рабочее пространство
                                    </Text>
                                    <Line />
                                </Container>
                            </button>
                            <button>
                                <Container display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'12px'}>
                                    <Text color={'#9C9C9C'} fontFamily={'Manrope-SemiBold'} fontSize={'16px'} hoverColor="#22A0BC">
                                        Приватность
                                    </Text>
                                    <Line />
                                </Container>
                            </button>
                            <button>
                                <Container display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'12px'}>
                                    <Text color={'#9C9C9C'} fontFamily={'Manrope-SemiBold'} fontSize={'16px'} hoverColor="#22A0BC">
                                        Безопасность
                                    </Text>
                                    <Line />
                                </Container>
                            </button>
                        </Container>

                    </Container>
                    <Container gap={'24px'} display={'flex'} padding={'40px'} flexDirection={'column'} width={'760px'} alignItems={'flex-start'} height={'auto'} backgroundColor={'#FDFDFD'} borderRadius={'16px'}>
                        <Container display={'flex'} flexDirection={'column'} gap={'16px'} width={'100%'}>
                            <Text fontFamily={'Manrope-SemiBold'} fontSize={'24px'} color={'#161616'}>
                                Данные профиля
                            </Text>
                            <Line />
                        </Container>
                        <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="32px">
                            <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="24px">
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Имя
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={name}
                                        onChange={nameHandler}
                                    />
                                </Container>
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Никнейм
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={username}
                                        onChange={usernameHandler}
                                    />
                                </Container>
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Почта
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={email}
                                        onChange={emailHandler}
                                    />
                                </Container>
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Город
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={city}
                                        onChange={cityHandler}
                                    />
                                </Container>
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Телефон
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={phone}
                                        onChange={phoneHandler}
                                    />
                                </Container>
                                <Container display={'flex'} flexDirection={'column'} width={"100%"} gap="10px">
                                    <Text fontFamily="Manrope-SemiBold" fontSize="18px" color="#161616" >
                                        Название компании
                                    </Text>
                                    <Input
                                        width="420px"
                                        value={company}
                                        onChange={companyHandler}
                                    />
                                </Container>
                            </Container>
                            <Button disabled={validationError ? true : false} onClick={saveDataHandler}>
                                Сохранить
                            </Button>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default EditProfile
