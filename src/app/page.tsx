'use client';

import { usePathname } from 'next/navigation';
import AdminDashboardPage from './admindashboard/page';
import UserManagementPage from './admindashboard/users/page';
import InvestmentPage from './admindashboard/investments/page';
import ProjectManagementPage from './admindashboard/projects/page';

export default function Home() {
    const pathname = usePathname();

    // Render the right page based on pathname
    if (pathname === '/admindashboard/users') {
        return <UserManagementPage />;
    } else if (pathname === '/admindashboard/investments') {
        return <InvestmentPage />;
    } else if (pathname === '/admindashboard/projects') {
        return <ProjectManagementPage />;
    }

    // Default to the admin dashboard
    return <AdminDashboardPage />;
}