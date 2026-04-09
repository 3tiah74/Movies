import React from 'react'
import AdminHeader from '../components/Admin/AdminHeader'

const AdminLayout = ({children}) => {
    return (
        <div>
            <AdminHeader />
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout