import React from 'react';
import LeftList from 'components/list/LeftList';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper'; 
import AlbumListContainer from 'containers/list/AlbumListContainer';

const AlbumListPage = ({ match }) => {
    const { album_title } = match.params;
    return(
        <PageTemplate>
            <ListWrapper>
                <LeftList/>
                <AlbumListContainer 
                    album_title = {album_title} 
                />
            </ListWrapper>
        </PageTemplate>
    );
};

export default AlbumListPage;