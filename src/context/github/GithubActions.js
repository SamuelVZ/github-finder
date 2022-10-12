const url = process.env.REACT_APP_GITHUB_URL;
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async(name) => {
    const params = new URLSearchParams({
        q: name,
    });


    //items is the array in the response
    const { items } = await fetch(`${url}/search/users?${params}`, {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
        },
    }).then((response) => response.json());

    return items;
};

export const getUser = async(login) => {
    const data = await fetch(`${url}/users/${login}`, {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
        },
    }).then((response) => {
        // response.status === 404 ? window.location = '/notfound' : response.json()

        if (response.status === 404) {
            window.location = '/notfound';
        } else {
            return response.json();
        }
    });


    return data;
};

export const getRepos = async(login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });

    const data = await fetch(`${url}/users/${login}/repos?${params}`, {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
        },
    }).then((response) => response.json());

    return data;
};