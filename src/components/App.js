import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  ListPage, 
  AlbumListPage, 
  EditorPage, 
  PostPage, 
  AlbumTitlePage, 
  NotFoundPage
 } from 'pages';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/page/:page" component={ListPage}/>
        <Route path="/tag/:tag/:page?" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route path="/album" component={AlbumListPage}/>
        <Route path="/album/:album_title" component={AlbumListPage}/>
        <Route path="/:album_title" component={AlbumListPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;
