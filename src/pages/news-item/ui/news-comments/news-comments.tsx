import React, { useEffect } from "react";

import { useComments } from "features/hooks";
import { Comments } from "widgets";

interface Props {
  id: number;
}

export const NewsComments = ({ id }: Props) => {
  const { relatedComments, error, isLoading, getAllComments } = useComments(id);

  useEffect(() => {
    if (!id) return;
    getAllComments(id);
  }, []);

  // if (error || isLoading) return <div>Loading</div>;

  function getComments() {
    getAllComments(id);
  }

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      <button onClick={getComments}>Update comments</button>
      {relatedComments && <Comments comments={relatedComments} />}
    </div>
  );
};
