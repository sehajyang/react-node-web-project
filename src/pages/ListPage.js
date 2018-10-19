import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper'; 
import LeftList from 'components/list/LeftList';
import RightList from 'components/list/RightList';
import ListContainer from 'containers/list/ListContainer';

const ListPage = ({match}) => {
    const { page = 1, tag} = match.params;
    return(
        <PageTemplate>
            <ListWrapper>
                <LeftList/>
                <RightList/>
                <ListContainer
                    page={parseInt(page, 10)}
                    tag={tag}
                />
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;