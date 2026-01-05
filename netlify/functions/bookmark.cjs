const fetch = require('node-fetch');
const slugify = require('slugify');

const API_FILE_TARGET = 'https://api.github.com/repos/crazko/romanvesely.com/contents/src/content/bookmarks/';

// Helper function to clean strings for frontmatter
const sanitize = (str) => {
  // replace endash and emdash with hyphens
  str = str.replace(/–/g, '-');
  str = str.replace(/—/g, '-');

  // replace double quotes and apostrophes
  str = str.replace(/"/g, "'");
  str = str.replace(/“/g, "'");
  str = str.replace(/”/g, "'");
  str = str.replace(/’/g, "'");

  str = str.replace(/:/g, '-');

  return str.trim();
};

const getFileContent = (data) => {
  const { title, url } = data;

  return `---
title: ${sanitize(title)}
url: ${url}
favorite: false
read: false
---
`;
};

const getFileName = (title) => {
  // Gives YYYY-MM-DD format
  const date = Intl.DateTimeFormat('fr-CA').format(new Date());

  if (!title) {
    return `${date}-${new Date().getUTCMilliseconds()}.md`;
  }

  const name = slugify(title, {
    // Remove all except those specified, see https://regex101.com/r/1nAXlv/1
    remove: /[^a-z0-9 ]/gi,
    lower: true,
  });

  return `${date}-${name}.md`;
};

// create the new file via the github API
const postFile = async (params) => {
  const { title, token } = params;
  const fileName = getFileName(title);
  const fileContent = getFileContent(params);
  const url = API_FILE_TARGET + fileName;

  const payload = {
    message: 'Add bookmark',
    content: Buffer.from(fileContent).toString('base64'),
    branch: 'master',
    committer: {
      name: 'Roman Vesely',
      email: 'crazko@gmail.com',
    },
  };

  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  return await fetch(url, options);
};

// helper function to handle API responses
const handleResponse = (response) => {
  console.log(response);
  if (response.ok) {
    return {
      statusCode: 200,
      body: 'Bookmark added',
    };
  }

  return {
    statusCode: response.status,
    body: `${response.statusText}`,
  };
};

exports.handler = async (event) => {
  try {
    // const params = JSON.parse(event.body);
    const params = Object.fromEntries(new URLSearchParams(event.body).entries());

    // Only allow POST
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method not allowed' };
    }

    // Token is required
    if (!params.token) {
      return { statusCode: 403, body: 'Missing access token' };
    }

    const response = await postFile(params);

    return handleResponse(response);
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: err.toString(),
    };
  }
};
