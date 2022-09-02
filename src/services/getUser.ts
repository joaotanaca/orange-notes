import { AxiosResponse } from 'axios'
import { User } from 'context/auth'
import { api } from 'services'

export default async function (token: string) {
    api.defaults.headers.common['authorization'] = token

    const { data: user } = await api.get<any, AxiosResponse<User>>('/user')
    return user
}
