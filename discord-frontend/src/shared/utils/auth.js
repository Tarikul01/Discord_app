import React from 'react'

export const logout = () => {
 localStorage.clear();
 window.location.pathname="/login";
}
