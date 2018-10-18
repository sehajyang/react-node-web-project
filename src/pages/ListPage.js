import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper'; 
import PostList from 'components/list/PostList';
import LeftList from 'components/list/LeftList';
import RightList from 'components/list/RightList';

const ListPage = () => {
    return(
        <PageTemplate>
            <ListWrapper>
                <LeftList/>
                <RightList/>
                <PostList/>
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;