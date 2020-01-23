import React from 'react';

function useUserName(user) {

        if (user)
            return `${user.firstName} ${user.lastName}`;
        return "";
}

export default useUserName;