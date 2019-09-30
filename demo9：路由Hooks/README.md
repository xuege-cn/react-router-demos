#### 使用react-router hooks更方便的使用router

import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router'

const location = useLocation()
const history = useHistory()
const params = useParams()
const match = useRouteMatch()

就可以获取到各个对象了