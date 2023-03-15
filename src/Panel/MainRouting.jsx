import {
    useEffect,
    useState,
} from 'react'
import {
    Route,
    Routes,
    useSearchParams,
} from 'react-router-dom'
import app, { get } from 'App'
import NotFound from './NotFound'
import Test from './Test'
import routes from '../Routes'
import Unify from '../Components/Unify'
import { modules } from '../Modules'

const MainRouting = ({
    progress,
    setProgress,
}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [allRoutes, setAllRoutes] = useState(routes)
    const [parentEntity, setParentEntity] = useState()
    const { parentEntityType, parentIdKey } = app.parseQuery()

    useEffect(() => {
        const addRoutes = (module, importResult) => {
            const name = `${module}Routes`
            if (Array.isArray(importResult[name])) {
                const moduleRoutes = importResult[name]
                let newRoutes = []
                for (let i = 0; i < moduleRoutes.length; i++) {
                    const moduleRoute = moduleRoutes[i]
                    if (!allRoutes.find(route => route.path === moduleRoute.path)) {
                        newRoutes.push(moduleRoute)
                    }
                }

                setAllRoutes(previousRoutes => {
                    const combinedRoutes = [...new Set([...previousRoutes, ...newRoutes])]
                        .sort((a, b) => a.path.localeCompare(b.path))
                    return combinedRoutes
                })
            }
        }
        modules.forEach(module => {
            import(`../${module}/Exports.jsx`).then(importResult => {
                addRoutes(module, importResult)
                addRoutes(module, importResult)
            })
        })
    }, [])

    useEffect(() => {
        if (parentEntityType) {
            const parsedQuery = app.parseQuery()
            let parentId = undefined
            if (parsedQuery.parentId) {
                parentId = parsedQuery.parentId
            }
            if (parentIdKey) {
                parentId = parsedQuery[parentIdKey]
            }
            if (!parentId) {
                parentId = parsedQuery.id
            }
            setTimeout(() => {
                // ajax
            }, 0)
        }
        else {
            setParentEntity(null)
        }
    }, [parentEntityType, parentIdKey])

    useEffect(() => {
        // console.log(allRoutes)
        window.routes = allRoutes
    }, [allRoutes])

    return (
        <Routes>
            <Route
                path='/test'
                element={<Test />}
            />
            {
                allRoutes.filter(entity => {
                    if (entity.superAdmin === true) {
                        return app.isSuperAdmin()
                    }
                    else {
                        return true
                    }
                }).map(route => {
                    return <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Unify
                                component={route.component}
                                isSuperAdmin={app.isSuperAdmin()}
                                parentEntity={parentEntity}
                                progress={progress}
                                query={searchParams.toString()}
                                setProgress={setProgress}
                            />
                        }
                    />
                })
            }
            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    )
}

export default MainRouting
