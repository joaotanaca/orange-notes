import { AxiosResponse } from 'axios'
import { User } from 'context/auth'
import { api } from 'services'

export default async function (token: string) {
    return new Promise<User>(async (resolve, reject) => {
        try {
            api.defaults.headers.common['authorization'] = token

            const { data: user } = await api.get<any, AxiosResponse<User>>(
                '/user'
            )
            resolve(user)
        } catch (err: any) {
            reject(err)
        }
    })
}
