import React from 'react';
import LeftList from 'components/list/LeftList';
import AlbumTitleList from 'components/list/Album/AlbumTitleList';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper'; 

const AlbumTitlePage = () => {
    return(
        <PageTemplate>
            <ListWrapper>
                <LeftList/>
                <AlbumTitleList/>
            </ListWrapper>
        </PageTemplate>
    );
};

export default AlbumTitlePage;