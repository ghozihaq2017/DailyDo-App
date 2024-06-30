import { create } from 'zustand';

import { getTaskById, addTask, editTask, deleteTaskById } from '@/fetching/task';

const useTasksStore = create((set) => ({
  detailTask: null,
  newTask: null,

  async asyncGetDetail(id) {
    try {
      const detail = await getTaskById(id);
      set((_state) => ({
        detailTask: detail
      }));
    } catch (error) {
      console.error('Error in asyncGetDetail:', error.message);
    }
  },
  async asyncDeleteTask(id) {
    try {
      await deleteTaskById(id);
    } catch (error) {
      console.error('Error in asyncDeleteTask:', error.message);
    }
  },
  async asyncAddTask(name, description, priority, dueDate, projectId) {
    try {
      const newTask = await addTask(name, description, priority, dueDate, projectId);
      set((state) => ({
        newTask
      }));
    } catch (error) {
      console.error('Error in asyncAddTask:', error.message);
    }
  },
  async asyncEditTask(id, name, description, priority, dueDate, projectId) {
    try {
      const updatedTask = await editTask(id, name, description, priority, dueDate, projectId);
      set((state) => ({
        detailTask: state.detailTask?.id === id ? updatedTask : state.detailTask
      }));
    } catch (error) {
      console.error('Error in asyncEditTasks:', error.message);
    }
  }
}));

export default useTasksStore;
