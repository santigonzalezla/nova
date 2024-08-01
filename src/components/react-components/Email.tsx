import * as React from 'react';

interface EmailProps {
    firstName: string;
    url: string;
}

const Email: React.FC<Readonly<EmailProps>> = ({firstName, url}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
    </div>
);

export default Email;
