import React from 'react';
import crypto from 'crypto';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Gravatar = ({ size }) => {
    const { gravatar } = useSiteMetadata();
    const image = crypto
        .createHash('md5')
        .update(gravatar.email)
        .digest('hex');

    return <img src={`${gravatar.url}${image}?size=${size}`} alt="logo" className="logo__image" />;
};
