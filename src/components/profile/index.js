import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage src="" alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Name User</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a href='https://google.com' target='_blank' rel='noopener noreferrer'>username</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>2</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>3</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>4</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
};

export default Profile