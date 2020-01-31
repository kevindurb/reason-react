
[@react.component]
let make = (~items, ~onDone) => {
  let todoItems = List.map((item: TodoListItem.todo) => {
    <TodoListItem
      item={item}
      onDone={onDone}
    />
  }, items);

  <>
    {todoItems->Array.of_list->ReasonReact.array}
  </>
}
