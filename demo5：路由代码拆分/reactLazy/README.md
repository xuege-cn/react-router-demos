#### react lazy的使用方式介绍
react lazy的支持版本：V16.6.0

##### 使用方式
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./router/home'))

<Suspense fallback={<div>loading</div>}>
    <Home />
</Suspense>