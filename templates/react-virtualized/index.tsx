import { FC, useEffect, useRef, useState } from 'react';
import {
  AutoSizerProps,
  CellMeasurerCache,
  CellMeasurerProps,
  ListProps,
  WindowScrollerProps,
  AutoSizer as _AutoSizer,
  CellMeasurer as _CellMeasurer,
  List as _List,
  WindowScroller as _WindowScroller,
} from 'react-virtualized';
import { ListRowProps, List as ListType } from 'react-virtualized/dist/es/List';

const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;
const CellMeasurer = _CellMeasurer as unknown as FC<CellMeasurerProps>;
const WindowScroller = _WindowScroller as unknown as FC<WindowScrollerProps>;

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});

export const ReactVirtualized = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const listRef = useRef<ListType | null>(null);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
    return (
      <CellMeasurer cache={cache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
        <div style={style}>
          <div style={{ padding: 8, marginBottom: 8, color: 'white', backgroundColor: '#282c34' }}>
            <div>index: {index}</div>
            <div>id: {posts[index].id}</div>
            <div>userId: {posts[index].userId}</div>
            <div>title: {posts[index].title}</div>
            <div>body: {posts[index].body}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  };

  const addPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      const data = response.json();

      data.then(newPosts => {
        setPosts([...posts, ...newPosts]);
      });
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      const data = response.json();

      data.then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div className='App'>
      react-virtualized example <button onClick={addPosts}>add</button> <br />
      <br />
      <WindowScroller>
        {({ height, scrollTop, isScrolling, onChildScroll }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                ref={listRef}
                autoHeight
                height={height}
                width={width}
                isScrolling={isScrolling}
                overscanRowCount={0}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={posts.length}
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
                deferredMeasurementCache={cache}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
};

[1, 2, 3].forEach;
