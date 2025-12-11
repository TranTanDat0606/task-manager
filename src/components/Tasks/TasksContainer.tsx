import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";

import { useTaskContext } from "../../contexts/task/TaskContext";
import TaskList from "./TaskList";

const TasksContainer = () => {
  const { visibleTasks, dispatch } = useTaskContext();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = visibleTasks.findIndex((t) => t.id === active.id);
      const newIndex = visibleTasks.findIndex((t) => t.id === over.id);

      dispatch({
        type: "REORDER_TASKS",
        payload: { oldIndex, newIndex },
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
    >
      <SortableContext items={visibleTasks} strategy={verticalListSortingStrategy}>
        <TaskList />
      </SortableContext>
    </DndContext>
  );
};

export default TasksContainer;
