export const Pagination = ({ pageForward, pageBackward, pageCount }) => {
  return (
    <div>
      <button onClick={() => pageBackward()}>Back</button>
      <span>{pageCount}</span>
      <button onClick={() => pageForward()}>Forward</button>
    </div>
  );
};
