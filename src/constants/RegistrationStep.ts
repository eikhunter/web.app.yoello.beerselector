import React from 'react';

export default interface RegistrationStep {
    id: number,
    completed: boolean,
    component: React.ReactNode,
    title: string
}
