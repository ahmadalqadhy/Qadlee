import * as UserAPIUtil from '../util/users_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveAllUsers = users => ({
    type: RECEIVE_USERS,
    users
})


export const requestUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then(users => {
            return (
                dispatch(receiveAllUsers(users))
            )
        }
    )
)