//rafce to create 
import React, { createContext, useState } from 'react';

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: []
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: "Testeee",
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState,
    }

    return (
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    )
};

export default GithubProvider;