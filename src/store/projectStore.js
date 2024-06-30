import { create } from 'zustand';

import {
  getProjectById,
  getAllMyProject,
  addProject,
  editProject,
  deleteProjectById
} from '@/fetching/project';

const useProjectsStore = create((set) => ({
  projectsData: [],
  detailProject: null,
  newProject: null,

  async asyncGetAll() {
    try {
      const projects = await getAllMyProject();
      set((_state) => ({
        projectsData: projects
      }));
    } catch (error) {
      console.error('Error in asyncGetAll:', error.message);
    }
  },
  async asyncGetDetail(id) {
    try {
      const detail = await getProjectById(id);
      set((_state) => ({
        detailProject: detail
      }));
    } catch (error) {
      console.error('Error in asyncGetDetail:', error.message);
    }
  },
  async asyncDeleteProject(id) {
    try {
      await deleteProjectById(id);
      set((state) => ({
        projectsData: state.projectsData.filter((project) => project.id !== id)
      }));
    } catch (error) {
      console.error('Error in asyncDeleteProject:', error.message);
    }
  },
  async asyncAddProject(title, description) {
    try {
      const newProject = await addProject(title, description);
      set((state) => ({
        projectsData: [...state.projectsData, newProject],
        newProject
      }));
    } catch (error) {
      console.error('Error in asyncAddProject:', error.message);
    }
  },
  async asyncEditProject(id, title, description) {
    try {
      const updatedProject = await editProject(id, title, description);
      set((state) => ({
        projectsData: state.projectsData.map((project) =>
          project.id === id ? updatedProject : project
        ),
        detailProject: state.detailProject?.id === id ? updatedProject : state.detailProject
      }));
    } catch (error) {
      console.error('Error in asyncEditProjects:', error.message);
    }
  }
}));

export default useProjectsStore;
