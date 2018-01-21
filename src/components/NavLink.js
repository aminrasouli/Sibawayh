import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import {ListGroupItem} from "reactstrap";

const LinkNav = () => (
    <div>
        <OldSchoolMenuLink activeOnlyWhenExact label="صفحه اصلی" to="/"/>
        <OldSchoolMenuLink label="درس اول" to="/course/1"/>
        <OldSchoolMenuLink label="درس دوم" to="/course/2"/>
        <OldSchoolMenuLink label="درس سوم" to="/course/3"/>
        <OldSchoolMenuLink label="درس چهارم" to="/course/4"/>
        <OldSchoolMenuLink label="درس پنجم" to="/course/5"/>
        <OldSchoolMenuLink label="درس ششم" to="/course/6"/>
        <OldSchoolMenuLink label="درس هفتم" to="/course/7"/>
        <OldSchoolMenuLink label="کتاب درسی" to="/pdfBook"/>
    </div>
);

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <ListGroupItem className={match ? 'activeLi' : ''}>
            <Link to={to}>{label}</Link>
        </ListGroupItem>
    )}/>
);

export default LinkNav