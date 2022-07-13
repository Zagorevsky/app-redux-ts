import * as UserActionCreators from './user'
import * as PhotoActionCreators from './photo'

export default {
    ...UserActionCreators,
    ...PhotoActionCreators
}
