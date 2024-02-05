import { Grid } from '@/base';
import BookCover from '@/components/bookCover';
import useReadLocalStorage from '@/hooks/useReadLocalStorage';
import { IBookInfo } from '@/types/book';
import { px2rem } from '@/utils/unit';
import React from 'react';

const GroupList: React.FC = React.memo(() => {
  const groupList = useReadLocalStorage<Record<string, IBookInfo[]>>('shelf-group') || {};
  Object.keys(groupList).map((groupName: string) => {
    console.log("groupList[groupName]", typeof(groupList[groupName]));
    
    // groupList[groupName].map((book) => console.log("book", book))
  });

  return (
    <>
      {Object.keys(groupList).map((groupName: string) => (
        <Grid.Item key={groupName}>
          <Grid columns={2} gap={px2rem(5)}>
            {/* <div>123456</div> */}
            {groupList[groupName].map((book) => (
              <Grid.Item key={book.bookId}>
                <BookCover
                  src={book.coverImg}
                  alt={book.title}
                  style={{ '--width': px2rem(40), '--height': px2rem(57) }}
                />
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      ))}
    </>
  );
});

export default GroupList;
