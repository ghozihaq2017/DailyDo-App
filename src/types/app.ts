export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  projectId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}

export interface CardProjectProps {
  project: Project;
}

export interface ModalConfirmationProps {
  id: string;
  message: string;
  onConfirm: () => void;
}

export interface ContainerTasksProps {
  titleContainer?: string;
  tasks: Task[];
}

export interface CardTaskProps {
  task: Task;
}