import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { Meta } from '../layout/Meta';
import { Container } from '../components/Container';
import { Content } from '../components/Content';

const title = 'Save to bookmarks';
const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : '';

export default () => {
  const [initialValues, setInitialValues] = React.useState({
    title: '',
    url: '',
  });

  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    setInitialValues(v => ({
      title: queryParams.get('title') ?? v.title,
      url: queryParams.get('url') ?? v.url,
    }));
  }, []);

  return (
    <Content>
      <Meta title={title} />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container>
        <h1>{title}</h1>
        <p>
          Check all <Link to="/bookmarks">bookmarks</Link>.
        </p>
        <form action={`${host}/.netlify/functions/bookmark`} method="POST" className="bookmarks__form">
          <label>
            Title
            <input type="text" name="title" defaultValue={initialValues.title} required />
          </label>
          <label>
            URL
            <input type="url" name="url" defaultValue={initialValues.url} required />
          </label>
          <label>
            Token
            <input type="password" name="token" autoComplete="current-password" required />
          </label>
          <button type="submit" autoFocus>
            Save
          </button>
        </form>
        <p className="text-sm text-right">
          all credits goes to <a href="https://mxb.dev/blog/indieweb-link-sharing/">Max Böck</a>
        </p>
      </Container>
    </Content>
  );
};