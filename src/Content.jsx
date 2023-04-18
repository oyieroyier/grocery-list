import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Your list is empty
        </h2>
      )}
    </main>
  );
};

export default Content;
