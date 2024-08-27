import React, { createContext, useState } from 'react'

export const AddCategoryResponseStatusContext = createContext()

export const EditCategoryContext = createContext()
export const isAdminAuthorizedContext = createContext()
export const isUserAuthorizedContext = createContext()

function Context({ children }) {
    //create the state to share between the components
    const [AddResponse, setAddResponse] = useState({})
    const [EditResponse, setEditResponse] = useState({})
    const [isAdminAuthorized, setIsAdminAuthorized] = useState(true)
    const [isUserAuthorized, setIsUserAuthorized] = useState(true)

    return (
        //To provide the context to all component
        <AddCategoryResponseStatusContext.Provider value={{ AddResponse, setAddResponse }}>
            <EditCategoryContext.Provider value={{ EditResponse, setEditResponse }}>
                <isAdminAuthorizedContext.Provider value={{ isAdminAuthorized, setIsAdminAuthorized }} >
                    <isUserAuthorizedContext.Provider value={{ isUserAuthorized, setIsUserAuthorized }} >
                        {children}
                    </isUserAuthorizedContext.Provider>
                </isAdminAuthorizedContext.Provider>
            </EditCategoryContext.Provider>
        </AddCategoryResponseStatusContext.Provider>
    )
}

export default Context
