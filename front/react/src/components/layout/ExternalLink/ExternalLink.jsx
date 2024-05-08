import React from 'react';

const ExternalLink = ({ href, children, ...props }) => (
    <a href={href} target='_blank' title="lienexterne" {...props}>
     {children}
    </a>
);

export default ExternalLink;