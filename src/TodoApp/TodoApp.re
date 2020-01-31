
[@react.component]
let make = () => {
  let (nextId, setNextId) = React.useState(() => 0);
  let (items, setItems) = React.useState(() => []);

  let addItem = React.useCallback((description: string) => {
    let item: TodoListItem.todo = {
      id: nextId,
      description: description,
      complete: false,
    };

    setItems((current) => [item, ...current]);

    setNextId((id) => id + 1);
  });

  let onAdd = React.useCallback((description) => {
    addItem(description);
  });

  let onDone = React.useCallback((id) => {
    setItems((current) => List.map(
        (item: TodoListItem.todo) => {
          if (item.id == id) {
            {
              ...item,
              complete: true,
            }
          } else {
            item
          }
        },
        current
    ));
  });

  <>
    <AddTodoInput
      onAdd={onAdd}
    />
    <TodoList
      items={items}
      onDone={onDone}
    />
  </>
}
