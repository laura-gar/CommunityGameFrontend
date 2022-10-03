import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AppLogo from "../Logos/AppLogo/AppLogo";
import './UserFormHeader.css';

export default function UserFormHeader() {
  return (
    <div className="user-form-header w-75">
      <AppLogo classVariant="app-logo--big" />
    </div>
  )
}
