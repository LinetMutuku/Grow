'use client';

import { usePathname } from 'next/navigation';
import AdminDashboardPage from './admindashboard/page';
import UserManagementPage from './admindashboard/users/page';
import InvestmentPage from './admindashboard/investments/page';
import ProjectManagementPage from './admindashboard/projects/page';
import IssuesPage from './admindashboard/issues/page';
import SignUpSelection from './sign-up/page';
import Login from './login/page';
import AdminSignUp from './admin-signup/page';

export default function Home() {
    const pathname = usePathname();

    // Admin Dashboard routes
    if (pathname === '/admindashboard') {
        return <AdminDashboardPage />;
    } else if (pathname === '/admindashboard/users') {
        return <UserManagementPage />;
    } else if (pathname === '/admindashboard/investments') {
        return <InvestmentPage />;
    } else if (pathname === '/admindashboard/projects') {
        return <ProjectManagementPage />;
    } else if (pathname === '/admindashboard/issues') {
        return <IssuesPage />;
    }

    // Authentication routes
    if (pathname === '/login') {
        return <Login />;
    } else if (pathname === '/sign-up') {
        return <SignUpSelection />;
    } else if (pathname === '/admin-signup') {
        return <AdminSignUp />;
    } else if (pathname === '/forgot-password') {
        return <ForgotPassword />;
    } else if (pathname === '/verify') {
        return <VerificationCode />;
    } else if (pathname === '/reset-password') {
        return <ResetPassword />;
    }

    // Default to sign-up page for the home route
    return <SignUpSelection />;
}