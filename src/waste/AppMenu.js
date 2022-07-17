import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function AppMenu() {
    return (
        <div>
            <NavLink to={'/enrollmentdetailslink'}>EnrollmentDetailsLink</NavLink>
        </div>
    )
}

export default AppMenu